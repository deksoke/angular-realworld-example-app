import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): string {
    console.log('JwtService.getToken');
    return window.localStorage['jwtToken'];
  }

  saveToken(token: string) {
    console.log('JwtService.saveToken');
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    console.log('JwtService.destroyToken');
    window.localStorage.removeItem('jwtToken');
  }

}
