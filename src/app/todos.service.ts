import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './types';

@Injectable({
  providedIn: 'root',
})

export class TodosService {
  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]>{
    return this.http.get("https://jsonplaceholder.typicode.com/todos") as Observable<Todo[]>;
  }

  getById(id:number): Observable<Todo>{
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`) as Observable<Todo>;
  }
}
