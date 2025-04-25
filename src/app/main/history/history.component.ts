import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResimRequestComponent } from '../../resim-request/resim-request.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FilterComponent } from './filter/filter.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GetRequestService } from '../../Backend/get_request/get_request.service';
import { RequestModel } from '../../request.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterModule, ResimRequestComponent, 
    FontAwesomeModule, FilterComponent, MatPaginatorModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  faFilter = faFilter;
  isModalOpen !: boolean;
  items = []; // tes données
  paginatedItems = [];
  requestsList: RequestModel[] = [];

  constructor (private getRequestService : GetRequestService) {}

  ngOnInit(): void {
    this.getRequestService.getRequests().subscribe(data => {
      this.requestsList = data;
      console.log(this.requestsList);
    });
  }

  // Initialise le constructeur par création d'une instance d'un service
  // constructor(private requestService : RequestService) {}

  // On initialise le composant en récupérant les données depuis la BDD
  // ngOnInit(): void {
    // this.requestService.getRequests().subscribe((data) => {
    //   console.log('Requests reçues:', data);
    // });
  // }

  // totalItems = 500;
  // pageSize = 20;
  // currentPage = 0;

  // updatePagination() {
  //   const startIndex = this.currentPage * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   this.paginatedItems = this.items.slice(startIndex, endIndex);
  // }

  // pageChanged(event: PageEvent) {
  //   this.pageSize = event.pageSize;
  //   this.currentPage = event.pageIndex;
  // }

  
  openModal() : void {
    this.isModalOpen = true;
  }

  closeModal() : void {
    this.isModalOpen = false;
  }
}
