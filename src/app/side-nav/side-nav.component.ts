import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDashboard, faGear, faNewspaper, faInfo, faChartSimple, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faNewspaper = faNewspaper;
  faInfo = faInfo;
  faGear = faGear;
  faChartSimple = faChartSimple;
  faCaretRight = faCaretRight;

  isSidebarCollapsed = false;
  @Output() toggleEvent = new EventEmitter<boolean>();

  onSidebarToggle() : void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.toggleEvent.emit(this.isSidebarCollapsed);
  }
}
