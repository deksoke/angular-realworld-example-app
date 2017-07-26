import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';
import { Observable } from 'RxJs'

import { UserService } from './../../services';
import * as firebase from 'firebase/app';

@Component({
  selector: 'main-sidebar',
  templateUrl: './main-sidebar.component.html'
})
export class MainSidebarComponent implements OnInit {

  menu_items: any[];
  currentUser: firebase.User;

  constructor(
    private userService: UserService,
    private common: CommonService
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (user:firebase.User) => {
        this.currentUser = user;
      }
    );

    this.common.getMenuItems()
      .subscribe(data => {
        this.menu_items = data;
      });
  }

  getMenuIconClass(): any{
    let iconClass = {

    };

    return iconClass;
  }
}
