import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Adas, Sensors, Follow, Comments } from '../object';

@Component({
  selector: 'app-resim-request',
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
  templateUrl: './resim-request.component.html',
  styleUrl: './resim-request.component.css'
})
export class ResimRequestComponent {
  faCaretDown = faCaretDown;
  isVisible: boolean = false; 

  @Input() isAdmin: boolean = false; // Détermine si l'utilisateur est admin 
  statutControl = new FormControl('awaiting'); // Valeur par défaut

  status_request = 'Awaiting'; 
  status: [string, string, string] = ['Awaiting', 'Approved', 'Refused']; // Etats pour les boutons à saisir pour le suivi
  current_date : Date = new Date() // Un exemple pour l'affichage
  eu_date_format: string = 'yyyy/MM/dd'; 

  formGroup = new FormGroup({
    resim_comments : new FormControl(''),
    results_comments : new FormControl(''), 
  });

  // Créer les objets du composant ici 
  adas : Adas = {
    PlatformVehicule : "Sweet500",
    projectVehicule : "BCB",
    ADASDrivingOwner : "AEB",
    TypeDriving : "Certif",
    ADASApplicantOwner : "AEB",
  } 

  sensor : Sensors = {
    silSWFrCam: "SW5.4.0",
    linkSilSWFrCam: "xx",
    silSWFrRad: "SW3.4.0", 
    linkSilSWFrRad: "xx",
    silSWSideRad: "xx", 
    linkSilSWSideRad: "xx", 
    silSWAdas: "xx", 
    CalibrationSwAdas: "xx", 
    linkSilSWAdas: "xx",
  }

  follow : Follow = {
    numDDV: "208.28", // Mandatory
    dateCreationResimLoopRequest: this.current_date, // Mandatory
    DatelastModif: this.current_date,
    Dateprevu: this.current_date,
    dateEndResimLoop: this.current_date, 
    stateResimLoopStatus: this.status_request, // Mandatory
    stateADASStatus: this.status_request, // Mandatory
    dateModifStatusBuckettemp: this.current_date, 
    statusBuckettemp: "To validate", // Mandatory
    associateResimForm: "xx",
  }

  comment!: Comments;

  toggleDiv() {
    this.isVisible = !this.isVisible;
  }

}
