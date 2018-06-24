import { ToDosProvider } from './../../providers/to-dos/to-dos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoModel } from '../../models/todo.model';


@IonicPage()
@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {
  public todos: TodoModel [] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toDosProvider: ToDosProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoListPage');
    this.toDosProvider.getTodos().subscribe(data => {
      this.todos = data;
    })
  }

}
