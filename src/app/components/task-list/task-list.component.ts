import { Component, Input } from '@angular/core';
import { Task } from '../../constants/task-interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
@Input () taskList: Task[] = [];
constructor() { }
removeTask(task: Task){
  const taskIndex=this.taskList.indexOf(task);
  //splice quita elementos de mi array, y 1 es la cantidad de elementos que quiero quitar
  if(taskIndex!==-1){
  this.taskList.splice(taskIndex, 1);
  console.log(this.taskList);
}

}
toggleCompleted(task: Task){
  task.completed=!task.completed;
}

drop(event: CdkDragDrop<Task[]>){
  moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
}
}
