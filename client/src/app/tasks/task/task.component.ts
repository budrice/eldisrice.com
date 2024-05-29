import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  private tasksService = inject(TasksService);
  @Input({ required: true }) task!: Task;

  onComplete() {
    this.tasksService.removeTask(this.task.id);
  }
}
