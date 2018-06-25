import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from '../../models/todo.model';
import { Observable } from 'rxjs/Observable';

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

  getTodos(): Observable<any> {
    return this.http.get(this.url);
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
