import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Todo } from './model/todo.model';
import { TodoListComponent } from './todo-list/todo-list.component';
import { format } from 'date-fns'
import {id,ja} from 'date-fns/locale'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  todoValue?: Todo;
  today:string = ""
  local: Locale = ja
  //  Two Way, kita bisa memanfaatkan getter and setter
  get todo(): Todo {
    return this.todoValue as Todo
  }

  set todo(todo: Todo) {
    this.onSaveTodo(todo)
  }

  ngOnInit(): void {
    this.loadTodos();

  }

  loadTodos(): void {
    const sessionTodos: string = sessionStorage.getItem('todos') as string;
    if (!sessionTodos) {
      const todos: Todo[] = [
        {
          id: 1,
          name: 'Makan',
          isDone: false
        },
        {
          id: 2,
          name: 'Minum',
          isDone: true
        }
      ];
      sessionStorage.setItem('todos', JSON.stringify(todos));
      this.todos = todos;
    } else {
      this.todos = JSON.parse(sessionTodos);
    }
  }

  onSaveTodo(todo: Todo): void {
    if (todo.id) {
      this.todos = this.todos.map((item) => {
        if (item.id === todo.id) {
          item = todo
        }
        return item;
      });
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
  onEditTodo(todo: Todo): void {
    this.todoValue = todo
  }

  onToggleTodo(todo: Todo): void {
    console.log('todo.component.onToggleTodo:', todo);
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onDeleteTodo(todo: Todo): void {
    if (todo.isDone) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Can\'t delete todo ${todo.name}`,
      })
    } else {
      Swal.fire({
        title: `Are you sure want to delete ${todo.name}?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            `${todo.name} has been deleted.`,
            'success'
          );
          this.todos.splice(0, 1);
          sessionStorage.setItem('todos', JSON.stringify(this.todos));
        }
      });
    }
  }
}


