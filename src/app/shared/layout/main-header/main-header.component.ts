import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../services';
import * as firebase from 'firebase/app';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html'
})
export class MainHeaderComponent implements OnInit {

  currentUser: firebase.User;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
  }

  gotoLoginPage(){
    this.router.navigate(['/auth/login']);
  }

  logout(){
    this.userService.logout();
    this.gotoLoginPage();
  }

}
