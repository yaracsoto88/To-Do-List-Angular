import { Component, OnInit } from '@angular/core';
import { Task } from '../../constants/task-interface';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  private subscription: Subscription = new Subscription();
  constructor(private dataService: DataService) {}
  ngOnInit(){
    this.subscription=this.dataService.getData().subscribe((data) => {
      console.log(data);
    }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
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
