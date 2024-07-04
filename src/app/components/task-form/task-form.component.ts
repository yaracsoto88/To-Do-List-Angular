import { Component, OnInit } from '@angular/core';
import { Task } from '../../constants/task-interface';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  constructor() {}
  ngOnInit(): void {}
  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask={
        name: this.newTask,
        completed: false
      }
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }
}
