import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Log, Level } from 'ng2-logger';
const log = Log.create('auth-guard service');

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<firebase.User>(null);
  public currentUser = this.currentUserSubject.distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private http: Http,
    private jwtService: JwtService,

    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    // this.setAuth(this.afAuth.authState);
  }

  loginWithGooglePlus() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        console.log('google+ login result');
        console.log(result);

        this.setAuth();
        log.info('login with google+ success');
        this.router.navigate(['/dashboard']);
      })
      .catch(error => alert(error.message));
  }

  loginWithFacebook() {

    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result) => {
        console.log('facebook login result');
        console.log(result);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // const cred: CustomCredential = result.credential;

        this.setAuth();
        log.info('login with facebook success');
        this.router.navigate(['/dashboard']);
      })
      .catch(function (error:any) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  }

  logout() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.afAuth.auth.signOut();
    this.router.navigate(['/auth/login']);
  }

  private setAuth() {
    let user = this.afAuth.auth.currentUser;
    if (!user) {
      return;
    }

    log.info('current User');
      console.log(user);

      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);

    //log.info('go to dashboard');
    //this.router.navigate(['/dashboard']);
  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    this.logout();

    // If JWT detected, attempt to get & store user's info
    if (this.afAuth.auth.currentUser) {
      this.setAuth();
      //this.setAuth(this.afAuth.authState);
      //this.router.navigate(['/dashboard']);
    } else {
      // Remove any potential remnants of previous auth states
      this.logout();
    }
  }

  getCurrentUser(): firebase.User {
    return this.currentUserSubject.value;
  }

}




