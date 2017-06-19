import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserService } from './user.service';

import { Log, Level } from 'ng2-logger';
const log = Log.create('auth-guard service');

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      let res = this.userService.isAuthenticated.take(1);
      res.subscribe(foo => {
        if (foo){
          log.info('user logged');
        }else{
          log.error('user not login');
          this.router.navigate(['/auth/login']);
        }
      });
      return res;
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   if (!this.userService.isAuthenticated.take(1)){
  //     log.error('user not autherize');
  //     this.router.navigate(["/auth/login"]);
  //     return false;
  //   }
  //   log.info('user autherized');
  //   return true;
  // }
}
