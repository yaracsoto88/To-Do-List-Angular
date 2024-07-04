import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../constants/task-interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
@Input () taskList: Task[] = [];
removeTask(task: Task){
  const taskIndex=this.taskList.indexOf(task);
  //splice quita elementos de mi array, y 1 es la cantidad de elementos que quiero quitar
  this.taskList.splice(taskIndex, 1);
}

toggleCompleted(task: Task){
  task.completed=!task.completed;
}
}
