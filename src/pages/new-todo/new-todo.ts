import { ToDosProvider } from './../../providers/to-dos/to-dos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the NewTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-todo',
  templateUrl: 'new-todo.html',
})
export class NewTodoPage {
  public newTodoForm: FormGroup;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public toDosProvider: ToDosProvider,
    ) {
      this.setUpNewForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTodoPage');
  }

  setUpNewForm() {
    this.newTodoForm = new FormGroup ({
      title: new FormControl,
      description: new FormControl,
    });
  }

  onSubmit() {
    console.log('this.newTodoForm = ');
    console.log(this.newTodoForm);
    this.toDosProvider.postTodo(this.newTodoForm.value.title, this.newTodoForm.value.description)

  }

}
