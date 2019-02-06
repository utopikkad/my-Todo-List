import { Component, OnInit } from '@angular/core';
import { TodoList } from '../todo-list';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  newToDo: string = "";
  todoList : TodoList = {
    name: "to do",
    tasks: JSON.parse(localStorage.getItem('todo'))
  };

  add() : void {
    this.todoList.tasks.push({name: this.newToDo, status : false});
    this.setLocalStorage(this.todoList.tasks);
    this.newToDo = ' ';
  }

  remove(index: number) : void {
    //var index = this.todoList.tasks.indexOf({name: name, status : false}, 0);
    if (index !== undefined) {
      this.todoList.tasks.splice(index, 1);
      this.setLocalStorage(this.todoList.tasks);
    }
  }
  setLocalStorage(tasks) : void{
    localStorage.setItem('todo', JSON.stringify(tasks));
    
  }
  constructor() { 
  }
  
  ngOnInit() {
    if (!this.todoList.tasks) {
      this.todoList.tasks = [];
    }
    // this.todoList.name = "to do";
    // this.todoList.tasks = JSON.parse(localStorage.getItem('todo'));
  }

}
