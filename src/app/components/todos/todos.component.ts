import { Component, OnInit } from '@angular/core';
import { todo } from '../../models/todo';
import { TodoService } from 'src/app/prodivers/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: todo[];
  i: number;
  constructor(private todo: TodoService) {
    this.todos = [];
    this.i = id;
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: false,
      },
      {
        content: 'second todo',
        completed: false,
      },
    ];
  }

  onToggle(): void {
    this.todo.toggleDone();
  }

  onDelete(): void {
    this.todo.deleteTodo();
  }
}
