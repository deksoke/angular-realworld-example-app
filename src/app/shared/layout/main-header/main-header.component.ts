import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';

import { UserService } from './../../services';
import * as firebase from 'firebase/app';
=======
import { UserFireBaseService } from './../../services';
import { Router } from '@angular/router';
>>>>>>> 6cd4ddbfc59e454306f2edb6c82658cb46cf886c

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html'
})
export class MainHeaderComponent implements OnInit {

<<<<<<< HEAD
  currentUser: firebase.User;
  constructor(
    private userService: UserService,
=======
  currentUser: any;
  constructor(
    private userService: UserFireBaseService,
>>>>>>> 6cd4ddbfc59e454306f2edb6c82658cb46cf886c
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
<<<<<<< HEAD
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
=======
      (user) => this.currentUser = user
    )
  }

  login(){
    this.userService.loginWithFacebook();
  }

  logout(){
    this.userService.logOut();
    //this.router.navigate(['/auth/login']);
>>>>>>> 6cd4ddbfc59e454306f2edb6c82658cb46cf886c
  }

}
