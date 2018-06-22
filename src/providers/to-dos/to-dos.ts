import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from '../../models/todo.model';

/*
  Generated class for the ToDosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToDosProvider {
  private url = 'http://localhost:3000/todo'
  constructor(public http: HttpClient) {
    console.log('Hello ToDosProvider Provider');
  }

  getTodos() {
    this.http.get(this.url).subscribe((data) => {
      console.log('data = ');
      console.log(data);
    });
  }

  postTodo(title, description) {
    let data: TodoModel = {
      title: title,
      description: description,
      complete: false
    }
    this.http.post(this.url, data).subscribe(res => {
      console.log('res = ');
      console.log(res);
    }
    )
  }

}
