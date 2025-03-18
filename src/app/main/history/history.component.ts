import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResimRequestComponent } from '../../resim-request/resim-request.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-history',
  imports: [CommonModule, RouterModule, ResimRequestComponent, FontAwesomeModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  faFilter = faFilter;
}
