import { ToDosProvider } from './../../providers/to-dos/to-dos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo: any = {
    title: 'test',
    description: 'desc test'
  };

  constructor(public navCtrl: NavController, public toDosProvider: ToDosProvider) {
    this.toDosProvider.getTodos();
    this.postTodo()

  }

  postTodo() {
    console.log('this.todo = ');
    console.log(this.todo);
    this.toDosProvider.postTodo(this.todo);
  }

}
