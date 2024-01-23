import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive,RouterModule,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {
  isContainerClosed: boolean = false;
  closeContainer() {
    this.isContainerClosed = true;   
  }
}