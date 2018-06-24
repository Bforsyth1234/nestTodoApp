import { TodoModel } from './../../models/todo.model';
import { ToDosProvider } from './../../providers/to-dos/to-dos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private todo: TodoModel;
  private showInputs = false;

  constructor(public navCtrl: NavController, public toDosProvider: ToDosProvider) {
    this.toDosProvider.getTodos();
  }

  postTodo() {
    this.todo.complete = false;
  }

  showInputFields() {
    this.showInputs =  true;
  }

  close() {
    this.showInputs = false;
  }

  save() {
    console.log('save clicked');
    this.showInputs = false;
  }

}
