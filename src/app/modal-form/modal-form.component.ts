import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
      PlatformVehicule: new FormControl<string | null>(''),
      projectVehicule : new FormControl<string | null>(''),
      ADASDrivingOwner: new FormControl<string | null>(''),
      TypeDriving: new FormControl<string | null>(''),
      ADASApplicantOwner: new FormControl<string | null>(''),
  
      silSWFrCam: new FormControl<string | null>(''),
      linkSilSWFrCam: new FormControl<string | null>(''),
      silSWFrRad: new FormControl<string | null>(''),
      linkSilSWFrRad: new FormControl<string | null>(''),
      silSWSideRad: new FormControl<string | null>(''),
      linkSilSWSideRad: new FormControl<string | null>(''),
      silSWAdas: new FormControl<string | null>(''),
      linkSilSWAdas: new FormControl<string | null>(''),
      Comments: new FormControl<string | null>(''),
  
      numDDV: new FormControl<string | null>(''),
      stateADASStatus: new FormControl<string | null>(''),
      associateResimForm: new FormControl<string | null>(''),
    });
  }

  // Soumission du formulaire
  onSubmit() {
    const formData = this.form.value;
    return formData;
  }

  // Fermeture du modal
  closeModal(){
    this.close.emit();
  }
}
