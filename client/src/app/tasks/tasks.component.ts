import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import { NewTask } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  constructor(private tasksService: TasksService) {}

  @Input({ alias: 'username', required: true }) name!: string;
  @Input({ alias: 'userid', required: true }) uid!: string;

  isStartNewTask = false;

  get selectedTasks() {
    return this.tasksService.getUserTasks(this.uid);
  }

  onStartNewTask() {
    this.isStartNewTask = true;
  }

  onEndNewTask() {
    this.isStartNewTask = false;
  }

}
