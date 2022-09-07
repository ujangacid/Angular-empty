import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { Todo } from '../model/todo.model';

const TODO_KEY = 'todos'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = []
  constructor(
    private readonly sesseionService: SessionService
  ) { }

  list():Todo[] {
    const todoValue = this.sesseionService.get(TODO_KEY);
    try {
      const todos:Todo[] = todoValue ? JSON.parse(todoValue) : [
        {
          id:1,
          name: 'Makan',
          isDone:false
        }];
        this.todos = todos
        this.updateSessionStorage
        return todos
    } catch (err:any) {
      return err.message
    }
  }

  checkedTodo(todo:Todo):void {
    try {
      this.todos.forEach(item => {
        if (item.id === todo.id) {
          item.isDone = !item.isDone
        }
        this.updateSessionStorage();
      })
    } catch (err) {
      console.log(err);

    }
  }

  remove(id:number):void {
    try {
      const todoId:number = this.todos.findIndex(item => item.id === id);
      this.todos.splice(todoId,1);
      this.updateSessionStorage();
    } catch (err) {
      console.log(err);

    }
  }

  saveTodo(todo:Todo):void {
    try {
      if (!todo.id) {
        todo.id = this.todos.length +1;
        this.todos.push(todo)
      }else {
        //edit
        this.todos = this.todos.map(item => {
          if (item.id === todo.id) {
            item = todo
          }
          return item
        })}
        this.updateSessionStorage();
    } catch (err) {
      console.log(err);

    }
  }

  get(id:number):Todo {
    try {
      return this.todos.find((todo) => todo.id === id) as Todo;
    } catch (err:any) {
      return err.message
    }
  }

  private updateSessionStorage():void {
    this.sesseionService.set(TODO_KEY,JSON.stringify(this.todos))
  }
}
