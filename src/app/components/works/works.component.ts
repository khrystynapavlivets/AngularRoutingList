import { Component } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { CenzorComponent } from "./cenzor/cenzor.component";
import { UserListComponent } from "./user-list/user-list.component";
import { RouterLink, RouterLinkActive, RouterOutlet, } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-works',
    standalone: true,
    templateUrl: './works.component.html',
    styleUrl: './works.component.scss',
    imports: [TaskListComponent, CenzorComponent, UserListComponent, CommonModule, RouterLink, RouterLinkActive, RouterOutlet, HomeComponent]
})
export class WorksComponent {
}
