import { Component, OnInit } from '@angular/core';
import { UserFireBaseService } from './../../services';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html'
})
export class MainHeaderComponent implements OnInit {

  currentUser: any;
  constructor(private userService: UserFireBaseService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    )
  }

  login(){
    this.userService.login();
  }

  logout(){
    this.userService.logOut();
  }

}
