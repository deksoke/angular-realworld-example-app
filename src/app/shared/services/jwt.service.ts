import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): string {
    return window.localStorage['jwtToken'];
  }
  getProvider(): string {
    return window.localStorage['jwtProvider'];
  }

  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }
  saveProviderId(providerId: string) {
    window.localStorage['jwtProvider'] = providerId;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('jwtProvider');
  }

}
