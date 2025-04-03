import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Adas, Sensors, Follow, Comments } from '../object';

@Component({
  selector: 'app-modal-form',
  imports: [FontAwesomeModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent implements OnInit {
  // Création d'un événement à transmettre au composant parent app.component
  @Output() close = new EventEmitter<void>();
  faXmark = faXmark;

  // Déclaration des objets importés du fichier object.ts
  adas: Adas;
  sensor: Sensors;
  follow: Follow;
  comments: Comments;
  form!: FormGroup;

  // Initialisation des objets dans le constructeur
  constructor(){
    this.adas = new Adas();
    this.sensor = new Sensors();
    this.follow = new Follow();
    this.comments = new Comments(); 
  }

  // Initialisation du composant dès sa création
  ngOnInit(): void {
    this.initForm();
  }
  
  // Initialisation pour la récupération du formulaire
  private initForm(): void {
    this.form = new FormGroup({
      PlatformVehicule: new FormControl<string | null>('', [Validators.required]),
      projectVehicule : new FormControl<string | null>('', [Validators.required]),
      ADASDrivingOwner: new FormControl<string | null>('', [Validators.required]),
      TypeDriving: new FormControl<string | null>('', [Validators.required]),
      ADASApplicantOwner: new FormControl<string | null>('', [Validators.required]),
  
      silSWFrCam: new FormControl<string | null>('', Validators.pattern(/^[A-Z._0-9]{3,9}$/)),
      linkSilSWFrCam: new FormControl<string | null>('', Validators.pattern(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/)),
      silSWFrRad: new FormControl<string | null>('',  Validators.pattern(/^[A-Z._0-9]{3,9}$/)),
      linkSilSWFrRad: new FormControl<string | null>('', Validators.pattern(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/)),
      silSWSideRad: new FormControl<string | null>('',  Validators.pattern(/^[A-Z._0-9]{3,9}$/)),
      silSWAdas: new FormControl<string | null>('', Validators.pattern(/^[A-Z._0-9]{3,9}$/)),
      linkSilSWAdas: new FormControl<string | null>('', Validators.pattern(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/)),
      Comments: new FormControl<string | null>(''),
  
      numDDV: new FormControl<string | null>('', Validators.pattern(/^[0-9]+(\.[0-9]+)?$/)),
      stateADASStatus: new FormControl<string | null>(''),
      associateResimForm: new FormControl<string | null>('', Validators.pattern(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/)),
    });
  }

  // Soumission du formulaire
  onSubmit() {
    const formData = this.form.value;
    console.log(formData);
    return formData;
  }

  // Fermeture du modal
  closeModal() : void {
    this.close.emit();
  }
}
