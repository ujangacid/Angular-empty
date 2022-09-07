import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { findIndex } from 'rxjs';
import Swal from 'sweetalert2';
import { Todo } from '../model/todo.model';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  todos: Todo[] =[]
  // @Input() todos: Todo[] = [];
  // @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  // @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  // @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  title: string = 'List';
  constructor(private readonly todoService:TodoService) { }

  ngOnInit(): void {
    this.loadTodo()
  }

  loadTodo():void {
    this.todos = this.todoService.list()
  }

  onCheckTodo(todo: Todo): void {
    this.todoService.checkedTodo(todo);
  }

  onSelectTodo(todo: Todo): void {
    // this.editTodo.emit(todo);
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
          this.todoService.remove(todo.id)
        }
      });
    }
  }

}
