import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Adas, Sensors, Follow, Comments } from '../../../object';

@Component({
  selector: 'app-filter',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  // Création événement pour la fermeture de la fenêtre
  @Output() close = new EventEmitter<void>();
  
  faXmark = faXmark;
  adas!: Adas;
  sensor!: Sensors;
  follow!: Follow;
  comments!: Comments;

  constructor() {
    this.adas = new Adas();
    this.sensor = new Sensors();
    this.follow = new Follow();
    this.comments = new Comments(); 
  }

  // Création du formulaire 
  form = new FormGroup({
    PlatformVehicule: new FormControl<string | null>(''),
    projectVehicule : new FormControl<string | null>(''),
    ADASDrivingOwner: new FormControl<string | null>(''),
    TypeDriving: new FormControl<string | null>(''),
    ADASApplicantOwner: new FormControl<string | null>(''),
    numDDV: new FormControl<string | null>('', [Validators.pattern(/^[0-9]+(\.[0-9]+)?$/)]),
    stateResimLoopStatus: new FormControl<string | null>(''),
  })

  // Fermeture du modal
  closeModal() : void {
    this.close.emit();
  }

  // Soumission du formulaire
  // Ajouter également une fonction pour filtrer les résultats
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    else {
      const formData = this.form.value;
      console.log(formData);
    }
  }
}
