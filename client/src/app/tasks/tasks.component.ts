import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent]
})
export class TasksComponent {
  @Input({ alias: 'username', required: true }) name!: string;
  @Input({ alias: 'userid', required: true }) id!: string;

  tasks = DUMMY_TASKS;

  get selectedTasks() {
    return this.tasks.filter(task => task.userId === this.id);
  }

}
