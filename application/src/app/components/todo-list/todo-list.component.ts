import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  titleKey: string;
  titleKeyTodoList: string;

  constructor() { }

  ngOnInit(){


    
  }


  todos = [
    "aaaaa", "sssssss","sssssssss"
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(event.container.data)
  }

  saveAction(actionForm:NgForm):void{
    const action = actionForm.value.action;
    this.todos.push(action);
    // this.titleKey = this.updatedBusinessForm.value.title;
    let url = window.location.href;
    let locationReplace = url.replace(/%20/g ,"_");
    this.titleKey = locationReplace.match(/\/([^\/]+)\/?$/)[1]
    this.titleKeyTodoList = this.titleKey + "TodoList"
    localStorage.setItem(this.titleKeyTodoList,JSON.stringify(actionForm.value));

    console.log(this.titleKeyTodoList)


    }
}
