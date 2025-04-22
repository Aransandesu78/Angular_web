import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResimRequestComponent } from '../../resim-request/resim-request.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { RequestService } from '../../services/request.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [CommonModule, RouterModule, ResimRequestComponent, FontAwesomeModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  faFilter = faFilter;

  // Initialise le constructeur par création d'une instance d'un service
  constructor(private requestService : RequestService) {}

  // On initialise le composant en récupérant les données depuis la BDD
  ngOnInit(): void {
    this.requestService.getRequests().subscribe((data) => {
      console.log('Requests reçues:', data);
    });
  }
}
