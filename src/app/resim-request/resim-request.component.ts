import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Adas, Sensors, Follow, Comments } from '../object';
import { RequestModel } from '../request.model';
import { PutRequestService } from '../Backend/put_request/put-request.service';
import { DeleteRequestService } from '../Backend/delete_request/delete-request.service';
import { GetRequestService } from '../Backend/get_request/get_request.service';

@Component({
  selector: 'app-resim-request',
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './resim-request.component.html',
  styleUrl: './resim-request.component.css'
})
export class ResimRequestComponent {
  @Input() isAdmin: boolean = false; // Détermine si l'utilisateur est admin 
  @Input() request!: RequestModel;
  @Output() SwitchEvent = new EventEmitter<boolean>();

  // Importation des services 
  putRequestService = inject(PutRequestService);
  deleteRequestService = inject(DeleteRequestService); 
  getRequestService = inject(GetRequestService);

  // Déclaration des objets importés du fichier object.ts
  adas: Adas;
  sensor: Sensors;
  follow: Follow;
  comments: Comments;
  formGroup = new FormGroup({
    resim_comments : new FormControl(''),
    results_comments : new FormControl(''), 
  });

  // Déclaration des attributs
  faCaretDown = faCaretDown;
  isVisible: boolean = false; 
  eu_date_format: string = 'yyyy/MM/dd'; 
  selected_AdasStatus!: string; 

  // Initialisation des objets dans le constructeur
  constructor() {
    this.adas = new Adas();
    this.sensor = new Sensors();
    this.follow = new Follow();
    this.comments = new Comments(); 
  }

  // Ouverture fermeture de la section commentaires
  toggleDiv() : void {
    this.isVisible = !this.isVisible;
    this.SwitchEvent.emit(this.isVisible);
  }

  // On récupère la valeur saisie dans le menu déroulé
  get_adas_status() : string {
    if (this.selected_AdasStatus === 'OK'){
      return 'OK';
    }
    else if (this.selected_AdasStatus === 'NOK'){
      return 'NOK';
    }
    else {
      return '';
    }
  }

  // Soumission des commentaires 
  Submit() {
    const formData = this.formGroup.value;
    console.log(formData);
    return formData;
  }

  // Modifier la demande resim formulée 
  modifyRequest(request: RequestModel){
    this.putRequestService.updateRequest(request.id, request);
  }

  // Supprimer une demande resim formulée
  deleteRequestByID(request: RequestModel): void {
    this.deleteRequestService.deleteRequest(request.id);
  }
}
