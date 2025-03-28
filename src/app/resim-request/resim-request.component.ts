import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Adas, Sensors, Follow, Comments } from '../object';

@Component({
  selector: 'app-resim-request',
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './resim-request.component.html',
  styleUrl: './resim-request.component.css'
})
export class ResimRequestComponent {
  // Déclaration des objets importés du fichier object.ts
  adas: Adas;
  sensor: Sensors;
  follow: Follow;
  comments: Comments;

  // Initialisation des objets dans le constructeur
  constructor(){
    this.adas = new Adas();
    this.sensor = new Sensors();
    this.follow = new Follow();
    this.comments = new Comments(); 
  }

  faCaretDown = faCaretDown;
  isVisible: boolean = false; 
  @Input() isAdmin: boolean = false; // Détermine si l'utilisateur est admin 
  statutControl = new FormControl('awaiting'); // Valeur par défaut
  eu_date_format: string = 'yyyy/MM/dd'; 
  selected_AdasStatus!: string; 

  formGroup = new FormGroup({
    resim_comments : new FormControl(''),
    results_comments : new FormControl(''), 
  });


  toggleDiv() : void {
    this.isVisible = !this.isVisible;
  }

  // On récupère la valeur saisie dans le menu déroulé
  get_adas_status() : string {
    if (this.selected_AdasStatus === 'OK'){
      return 'ok';
    }
    else if (this.selected_AdasStatus === 'NOK'){
      return 'nok';
    }
    else {
      return '';
    }
  }

}
