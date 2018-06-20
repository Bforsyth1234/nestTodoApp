import { ToDosProvider } from './../../providers/to-dos/to-dos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo: any;

  constructor(public navCtrl: NavController, public toDosProvider: ToDosProvider) {
    this.toDosProvider.getTodos();
  }

  postTodo() {
    this.toDosProvider.postTodo(this.todo);
  }

}
