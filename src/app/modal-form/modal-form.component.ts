import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-form',
  imports: [],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent {
  @Output() close = new EventEmitter<void>();
  
  closeModal(){
    this.close.emit();
  }
}
