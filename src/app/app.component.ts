import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { MainComponent } from "./main/main.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, SideNavComponent, MainComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ADAS Synchro RESIM TOOL';
  faPlus = faPlus;
  user_name = "Alain EENSCHOOTEN";
  newSidenavLeft! : number;
  newMainLeft! : number;
  isSideNavOpen! : boolean;

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
}
