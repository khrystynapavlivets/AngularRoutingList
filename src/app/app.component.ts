import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "./components/home/home.component";
import { WorksComponent } from "./components/works/works.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule, HomeComponent, WorksComponent, RouterOutlet],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'RoutingList';
}


