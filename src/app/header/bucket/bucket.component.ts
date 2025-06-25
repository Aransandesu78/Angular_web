import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { ResimRequestComponent } from '../../resim-request/resim-request.component';
import { FilterComponent } from '../../main/history/filter/filter.component';
import { CommonModule } from '@angular/common';
import { Adas, Sensors, Follow } from '../../object';
import { RequestModel } from '../../request.model';
import { GetRequestService } from '../../Backend/get_request/get_request.service';

@Component({
  selector: 'app-bucket',
  imports: [FontAwesomeModule, ResimRequestComponent, FilterComponent, CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent implements OnInit {
  // Création des propriétés
  faFilter = faFilter;
  isModalOpen!: boolean;
  requestsList: RequestModel[] = [];
  request!: RequestModel;
  statusBuckettemp: string = 'To_validate';

  // Objets à déclarer
  adas: Adas;
  sensor: Sensors;
  follow: Follow;

  // Injection d'un service et initialisation des objets
  constructor(private getRequestService : GetRequestService) {
    this.adas = new Adas();
    this.sensor = new Sensors();
    this.follow = new Follow();
  }

  // Initialisation du composant avant affichage sur le DOM
  ngOnInit(): void {
    this.getRequestService.getRequestsByStatus(this.statusBuckettemp).subscribe(data => {
      this.requestsList = data;
      console.log(this.requestsList);
    });
  }

  // Ouverture du modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Fermeture du modal
  closeModal(): void {
    this.isModalOpen = false;
  }
}
