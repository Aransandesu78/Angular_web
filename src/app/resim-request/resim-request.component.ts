import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Adas, Sensors, Follow } from '../object';
import { RequestModel } from '../request.model';
import { PutRequestService } from '../Backend/put_request/put-request.service';
import { DeleteRequestService } from '../Backend/delete_request/delete-request.service';
import { GetRequestService } from '../Backend/get_request/get_request.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-resim-request',
  imports: [
    FontAwesomeModule, 
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './resim-request.component.html',
  styleUrl: './resim-request.component.css'
})
export class ResimRequestComponent implements OnInit{
  // Propriété pour le databinding 
  @Input() isAdmin: boolean = false; // Détermine si l'utilisateur est admin 
  @Input() request!: RequestModel; // Composant courant appelé par le parent
  @Output() requestClicked = new EventEmitter<number>(); // Evénement pour récupérer l'id du composant sélectionner
  @Output() SwitchEvent = new EventEmitter<boolean>(); // Evénement à envoyer au composant parent 

  // Importation des services 
  putRequestService = inject(PutRequestService);
  deleteRequestService = inject(DeleteRequestService); 
  getRequestService = inject(GetRequestService);

  // Déclaration des objets importés du fichier object.ts
  adas: Adas;
  sensor: Sensors;
  follow: Follow;
  resim_comments = new FormControl('');
  results_comments = new FormControl(''); 

  // Déclaration des attributs
  faCaretDown = faCaretDown;
  isVisible: boolean = false; 
  eu_date_format: string = 'yyyy/MM/dd'; 
  selected_AdasStatus!: string; 
  isConfirmOpen: boolean = false; 
  comments!: string;
  results!: string;

  // Initialisation des objets dans le constructeur
  constructor( private dialog: MatDialog) {
    this.adas = new Adas();
    this.sensor = new Sensors();
    this.follow = new Follow();
  }

  ngOnInit(): void {
    // Initialiser les champs de texte avec les valeurs existantes
    this.resim_comments.setValue(this.request.Comments || '');
    this.results_comments.setValue(this.request.result_comment || '');
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
    if (this.resim_comments.invalid || this.results_comments.invalid) return;

    const updatedComments = this.resim_comments.value?.trim() || '';
    const updatedResults = this.results_comments.value?.trim() || '';

    const updatedRequest: RequestModel = {
      ...this.request,
      Comments: updatedComments,
      result_comment: updatedResults
    };

    this.putRequestService.patchRequest(this.request.id, updatedRequest).subscribe({
      next: () => {
        this.request.Comments = updatedComments;
        this.request.result_comment = updatedResults;
        console.log('Comments and results updated!');
      },
      error: err => console.error('Error in update', err)
    });

    console.log(this.request);
  }

  // Envoie au composant parent 
  removeRequestFromList(id: number): void {
    this.requestClicked.emit(id);
  }

  // Ouverture du dialog
  OpenDeleteDialog() {
    // On transmet vers le composant ModalConfirmComponent l'objet data
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      // Données à transmettre dans l'objet data
      data: { 
        message: 'Are you sure you want to delete this request ?',
        id: this.request.id
      }
    });

    // On récupère dès la fermeture une valeur booléenne
    dialogRef.afterClosed().subscribe(result => {
      // Si vraie, alors on envoie au composant parent un événement pour mettre à jour la liste des demandes
      if (result?.deleted) {
        this.removeRequestFromList(result.id);
      }
    });
  }

}
