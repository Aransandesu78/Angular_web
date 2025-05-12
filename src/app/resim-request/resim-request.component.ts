import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Adas, Sensors, Follow, Comments } from '../object';
import { RequestModel } from '../request.model';
import { PutRequestService } from '../Backend/put_request/put-request.service';
import { DeleteRequestService } from '../Backend/delete_request/delete-request.service';
import { GetRequestService } from '../Backend/get_request/get_request.service';
import { Observable } from 'rxjs';

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

  // Déclaration des objets importés du fichier object.ts
  adas: Adas;
  sensor: Sensors;
  follow: Follow;
  comments: Comments;

  // Initialisation des objets dans le constructeur
  constructor(private putRequestService: PutRequestService, private deleteRequestService: DeleteRequestService, private getRequestService: GetRequestService) {
    this.adas = new Adas();
    this.sensor = new Sensors();
    this.follow = new Follow();
    this.comments = new Comments(); 
  }

  faCaretDown = faCaretDown;
  isVisible: boolean = false; 
  eu_date_format: string = 'yyyy/MM/dd'; 
  selected_AdasStatus!: string; 

  formGroup = new FormGroup({
    resim_comments : new FormControl(''),
    results_comments : new FormControl(''), 
  });

  // Ouverture fermeture de la section commentaires
  toggleDiv() : void {
    this.isVisible = !this.isVisible;
    this.SwitchEvent.emit(this.isVisible);
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

  // Soumission des commentaires 
  Submit() {
    const formData = this.formGroup.value;
    console.log(formData);
    return formData;
  }

  // Modifier la demande resim formulée 
  modifyRequest(request: RequestModel){
    this.putRequestService.updateRequest(request);
  }

  // Supprimer une demande resim formulée
  deleteRequestByID(request: RequestModel): void {
    this.deleteRequestService.deleteRequest(request.id);
  }
}
