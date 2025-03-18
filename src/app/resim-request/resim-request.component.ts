import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-resim-request',
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
  templateUrl: './resim-request.component.html',
  styleUrl: './resim-request.component.css'
})
export class ResimRequestComponent {
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  
  formGroup = new FormGroup({
    resim_comments : new FormControl(''),
    results_comments : new FormControl(''), 
  });

  onSubmit() {
    console.log(this.formGroup.value);
  }

}
