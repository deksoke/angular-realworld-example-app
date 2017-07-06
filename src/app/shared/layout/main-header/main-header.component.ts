import { Component, OnInit } from '@angular/core';
import { UserFireBaseService } from './../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html'
})
export class MainHeaderComponent implements OnInit {

  currentUser: any;
  constructor(
    private userService: UserFireBaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (user) => this.currentUser = user
    )
  }

  login(){
    this.userService.loginWithFacebook();
  }

  logout(){
    this.userService.logOut();
    //this.router.navigate(['/auth/login']);
  }

}
