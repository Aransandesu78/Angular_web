import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main',
  imports: [RouterModule, NgClass],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() isSideNavOpen! : boolean;
}