import { Component, inject } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DeleteRequestService } from '../Backend/delete_request/delete-request.service';

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

  // Transmission de l'événement close au composant parent 
  closeModal(): void {
    this.close.emit();
  }

  // DeleteThisRequest(): void {

  //   this.deleteRequestService.deleteRequest()
  // }

}
