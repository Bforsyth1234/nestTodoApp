import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'TodoListPage';
  tab2Root = 'NewTodoPage';
  tab3Root = ContactPage;

  constructor() {

  }
}
