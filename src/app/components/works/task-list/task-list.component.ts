import { Component, Output, EventEmitter, Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component'
@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss',
    imports: [FormsModule, ChildComponent]
})
export class TaskListComponent {
  public count: number = 6;
  private tasks: string[] = [];
  public newTask: string = '';
  public taskName: string = '';
  public user = 'Ivan Ivanov'

  addTask(): void {
    if (this.taskName.trim() !== '') {
      this.count++;
      this.newTask = this.taskName
      this.taskName = '';
    }
  }

  onTaskDeleted(index: number) {
    this.count--;
  }
}
