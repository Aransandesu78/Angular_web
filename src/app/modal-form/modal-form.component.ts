import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Adas, Sensors, Follow } from '../object';
import { PostRequestService } from '../Backend/post_request/post-request.service';

@Component({
  selector: 'app-modal-form',
  imports: [FontAwesomeModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent implements OnInit {
  // Création d'un événement à transmettre au composant parent app.component
  @Output() close = new EventEmitter<void>();
  postRequestService = inject(PostRequestService);
  faXmark = faXmark;

  // Déclaration des objets importés du fichier object.ts
  adas!: Adas;
  sensor!: Sensors;
  follow!: Follow;
  form!: FormGroup;
  adas_tables!: string[][];
  adas_key : string[] = ["PlatformVehicule", "projectVehicule", 
    "ADASDrivingOwner", "TypeDriving", "ADASApplicantOwner"];

  // Initialisation des objets dans le constructeur
  constructor() {
    this.adas = new Adas();
    this.sensor = new Sensors();
    this.follow = new Follow(); 
    this.adas_tables = [this.adas.PlatformVehicule, this.adas.projectVehicule, 
      this.adas.ADASDrivingOwner, this.adas.TypeDriving, this.adas.ADASApplicantOwner];
  }

  // Initialisation du composant dès sa création
  ngOnInit(): void {
    this.initForm();
  }
  
  // Initialisation pour la récupération du formulaire
  // On configure les entrées de chaque attribut
  private initForm(): void {
    this.form = new FormGroup({
      PlatformVehicule: new FormControl<string | null>('', [Validators.required]),
      projectVehicule : new FormControl<string | null>('', [Validators.required]),
      ADASDrivingOwner: new FormControl<string | null>('', [Validators.required]),
      TypeDriving: new FormControl<string | null>('', [Validators.required]),
      ADASApplicantOwner: new FormControl<string | null>('', [Validators.required]),
  
      silSWFrCam: new FormControl<string | null>('', [Validators.pattern(/^[A-Z._0-9]{3,9}$/)]),
      linkSilSWFrCam: new FormControl<string | null>('', [Validators.pattern(/^(https?:\/\/)[^\s$.?#].[^\s]*$/)]),
      silSWFrRad: new FormControl<string | null>('',  [Validators.pattern(/^[A-Z._0-9]{3,9}$/)]),
      linkSilSWFrRad: new FormControl<string | null>('', [Validators.pattern(/^(https?:\/\/)[^\s$.?#].[^\s]*$/)]),
      silSWSideRad: new FormControl<string | null>('',  [Validators.pattern(/^[A-Z._0-9]{3,9}$/)]),
      linkSilSWSideRad: new FormControl<string | null>('', [Validators.pattern(/^(https?:\/\/)[^\s$.?#].[^\s]*$/)]),
      silSWAdas: new FormControl<string | null>('', [Validators.pattern(/^[A-Z._0-9]{3,9}$/)]),
      linkSilSWAdas: new FormControl<string | null>('', [Validators.pattern(/^(https?:\/\/)[^\s$.?#].[^\s]*$/)]),
      Comments: new FormControl<string | null>(''),
  
      numDDV: new FormControl<string | null>('', [Validators.pattern(/^[0-9]+(\.[0-9]+)?$/)]),
      stateResimLoopStatus: new FormControl<string | null>('', [Validators.required]),
      associateResimForm: new FormControl<string | null>('', [Validators.pattern(/^(https?:\/\/)[^\s$.?#].[^\s]*$/)]),
    });
  }

  // Soumission du formulaire
  onSubmit() {
    // Si formulaire invalide, affichage des erreurs
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // Marque que tous les champs sont "touchés pour affiner les erreurs"
      return;
    }
    // Sinon, envoi des données vers le serveur
    else {
      const formData = this.form.value; 
      this.postRequestService.createRequest(formData).subscribe({
        next: (response) => console.log('Response : ', response),
        error: (error) => console.error('Error : ', error)
      });
      console.log(formData);
      this.closeModal(); // Fermeture du modal 
      // Possibilité d'apparaître un message + notification
    }
  }

  // Fermeture du modal
  closeModal() : void {
    this.close.emit();
  }
}
