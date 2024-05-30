import { Injectable } from '@angular/core';
import { type Task, type NewTask } from './task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [];
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: NewTask, userId: string) {
    let task: Task = {
      id: 't' + Math.floor(this.tasks.length + 1),
      userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    };
    this.tasks.unshift(task);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== id;
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
