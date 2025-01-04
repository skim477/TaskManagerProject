import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input() name: string | undefined;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Angular',
      summary: 'Learn Angular',
      dueDate: '2025-01-31',
    }
    
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task)=> task.id !== id);
  }
}
