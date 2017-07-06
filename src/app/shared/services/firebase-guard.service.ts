import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserFireBaseService } from './user.service';

@Injectable()
export class AuthFireBaseGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserFireBaseService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    //return this.userService.isAuthenticated.take(1);

    let res = this.userService.isAuthenticated.take(1);
    res.subscribe(
      isActivate => {
        if (!isActivate){
          console.log('user not login. >>> redirect to login page');
          this.router.navigate(['/auth/login']);
        }else{
          console.log('login successfully jarrrr.');
        }
      }
    );
    return res;

  }
}
