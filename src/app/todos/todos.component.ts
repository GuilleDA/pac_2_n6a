import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../types';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos:Todo[] = [];
  alltodos:Todo[] = [];
  userId: string | undefined;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getTodos().subscribe((data) => {
      this.todos = data;
      this.alltodos = data;
    });
  }

  filterByUserId() {
    this.userId = document.querySelector("input")?.value

    if(this.userId){
      this.todos = this.alltodos;
      this.todos = this.todos.filter((todo: any) => `${todo.userId}` === this.userId)
    }else{
      this.todos = this.alltodos;
    }

  }

  getDetails(id:number) {
    this.todosService.getById(id).subscribe((todo) => {
      alert(`Title: ${todo.title}, Completed: ${todo.completed}, ID: ${todo.id}, User ID: ${todo.userId}`)
    });

  }
}
