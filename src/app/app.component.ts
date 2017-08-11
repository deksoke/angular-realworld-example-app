import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { UserService, UserFireBaseService } from './shared';
import * as firebase from 'firebase/app';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  private sub: any;
  private currentUser:any;

  constructor (
    private slimLoader: SlimLoadingBarService,
    private router: Router,
    private userService: UserService,
    public userFireBaseService: UserFireBaseService
  ) {
        // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.slimLoader.height = '4px';
                //this.slimLoader.color = 'blue';
                
                this.slimLoader.start();
            } else if ( event instanceof NavigationEnd ||
                        event instanceof NavigationCancel ||
                        event instanceof NavigationError) {
                this.slimLoader.complete();
            }
        }, (error: any) => {
            this.slimLoader.complete();
        });
  }

  ngOnInit() {
    this.userFireBaseService.populate();
    this.userFireBaseService.currentUser.subscribe(
      (data) => this.currentUser = data
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  logout(){
    this.userFireBaseService.logOut();
    this.router.navigate(['/auth/login']);
  }

  private isLogin(){
    return this.currentUser != null;
  }

  setContainerClass(){
    let classs = {
      'hold-transition': this.isLogin(),
      'skin-purple': this.isLogin(),
      'sidebar-mini fixed': this.isLogin()
    }
    return this.isLogin() ? classs : {};
  }
}
