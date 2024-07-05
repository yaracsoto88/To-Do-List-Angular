import { Component, OnInit } from '@angular/core';
import { Task } from '../../constants/task-interface';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  constructor(private dataService: DataService) {}
  ngOnInit(): void {}
  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask={
        name: this.newTask,
        completed: false
      }
      this.tasks.push(newTask);
      this.dataService.sayHello();
      console.log(this.tasks);
      this.newTask = '';
    }
  }
}
