import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:Todo[] =[];
  todo?:Todo;

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos():void {
    const sessionTodos: string = sessionStorage.getItem('todos') as string;
    if (!sessionTodos) {
      const todos = [
        {
          id:1,
          name:'makan',
          isDone: false
        },
        {
          id:2,
          name:'mandi',
          isDone: true
        }
      ];
      sessionStorage.setItem('todos',JSON.stringify(todos));
      this.todos = todos;
    } else {
      this.todos = JSON.parse(sessionTodos)
    }

  }

  constructor() { }

  onSaveTodo(todo:Todo):void {
    todo.id = this.todos.length +1;
    this.todos.push(todo);
    sessionStorage.setItem('todos',JSON.stringify(this.todos));
  }

  onEditTodo(todo: Todo):void { }
  onToggleTodo(todo:Todo):void { }
}
