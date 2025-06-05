import { Component, Inject, inject } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DeleteRequestService } from '../Backend/delete_request/delete-request.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm',
  imports: [FontAwesomeModule],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.css'
})
export class ModalConfirmComponent {
  @Output() close = new EventEmitter<void>();
  faXmark = faXmark;
  deleteRequestService = inject(DeleteRequestService); // Injection du service

  // Injection du databinding 
  constructor(
    public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) {}
  
  // Fermeture du dialog par le bouton non et le bouton croix
  closeModal(): void {
    this.close.emit();
  }

  // Suppression d'une demande resim
  DeleteThisRequest(): void {
    console.log(this.data);
    const id = this.data?.id; 
    this.deleteRequestService.deleteRequest(id).subscribe({
      next: () => {
        console.log(`Request id ${id} deleted with success !\n`);
        // Fermeture du dialog
        this.dialogRef.close({ deleted: true, id }); // Renvoie l'id supprimé
      },
      error: err => console.error('Erreur de suppression', err)
    });
  }
}
