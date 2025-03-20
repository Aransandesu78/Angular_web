import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
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
  faCaretUp = faCaretUp;

  status_request: string = "Awaiting";
  statuts = ['Awaiting', 'Approved', 'Refused']; // Etats pour les boutons à saisir pour le suivi
  role: string = 'user'; // On définit le rôle de l'utilisateur
  current_date : Date = new Date() // Un exemple pour l'affichage
  eu_date_format = 'dd/MM/yyyy';
  
  formGroup = new FormGroup({
    resim_comments : new FormControl(''),
    results_comments : new FormControl(''), 
  });

  // Créer les objets du composant ici 
  adas : Adas = {
    PlatformVehicule : "Sweet500",
    projectVehicule : "BCB",
    ADASDrivingOwner : "Renault",
    TypeDriving : "Certif",
    ADASApplicantOwner : "Renault",
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
    numDDV: "208.28",
    dateCreationResimLoopRequest: this.current_date,
    DatelastModif: this.current_date,
    Dateprevu: this.current_date,
    dateEndResimLoop: this.current_date,
    stateResimLoopStatus: this.status_request,
    stateADASStatus: this.status_request,
  }

  comment : Comments = {
    statusBuckettemp: "Validated",
    associateResimForm: "xx",
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
