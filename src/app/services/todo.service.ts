import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../model/Todo';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:String="https://jsonplaceholder.typicode.com/todos";  
  todoslimit:String= '?_limit=5';

  constructor(private http:HttpClient) { }
  getTodo():Observable<any>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoslimit}`)
  }

  toggleCompleted(todo:Todo):Observable<any>{
    const url=`${this.todosUrl}/${todo.id}`
    return this.http.put(url,todo,httpOptions)
  }
  deleteTodo(todo:Todo):Observable<Todo>{
    const url=`${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions)
  }
  addTodo(todo:Todo):Observable<any>{
    const postUrl="https://jsonplaceholder.typicode.com/todos";
    return this.http.post<Todo>(postUrl, todo,httpOptions)
  }
}
