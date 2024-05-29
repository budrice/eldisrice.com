import { Component, inject, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;

  private tasksService = inject(TasksService);
  close = output<void>();
  enteredTitle = '';
  enteredSummary = '';
  selectedDueDate = '';

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.selectedDueDate,
      },
      this.userId
    );
    this.onClose();
  }
}
