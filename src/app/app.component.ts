import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MainComponent } from "./main/main.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ModalFormComponent } from "./modal-form/modal-form.component";

// import { User } from './object';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, SideNavComponent, MainComponent, FontAwesomeModule, CommonModule, ModalFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ADAS Synchro RESIM TOOL';
  faPlus = faPlus;
  newSidenavLeft! : number;
  newMainLeft! : number;
  isSideNavOpen! : boolean;
  isModalOpen = false; 
  
  // Définition de l'utilisateur à modifier en créant un objet à partir du fichier object.ts
  user_name : string = 'Alain';
  user_last_name : string = 'EENSCHOOTEN';
  user_ipn!: string;
  user_status!: boolean;

  // myuser = new User(); à mettre pour plus tard

  // Redimensionner en px les propriété css margin-left en px le side-nav et le main component
  resize(val: boolean) : void {
    if (val === true) {
      this.newSidenavLeft = -120;
      this.isSideNavOpen = true;  
    }
    else {
      this.newSidenavLeft = 0;
      this.isSideNavOpen = false;
    }
  }

  // Ouverture de la fenêtre modale
  openModal() : void {
    this.isModalOpen = true;
  }

  // Fermeture de la fenêtre modale
  closeModal() : void {
    this.isModalOpen = false;
  }
}
