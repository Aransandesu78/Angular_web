import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-confirm',
  imports: [FontAwesomeModule],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.css'
})
export class ModalConfirmComponent {
  @Output() close = new EventEmitter<void>();
  faXmark = faXmark;

  closeModal(): void {
    this.close.emit();
  }
}
