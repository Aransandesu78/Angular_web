import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Column } from '../../object';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // Création des colonnes du tableau
  headers : (keyof Column)[] = ["id", "project", "adas", 
    "ecu", "radar", "frCam", 
    "sideRad", "database", "nbDdv", 
    "deadline", "status", "comments"]; 
}
