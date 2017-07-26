import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): string {
<<<<<<< HEAD
=======
    console.log('JwtService.getToken');
>>>>>>> 6cd4ddbfc59e454306f2edb6c82658cb46cf886c
    return window.localStorage['jwtToken'];
  }
  getProvider(): string {
    return window.localStorage['jwtProvider'];
  }

  saveToken(token: string) {
<<<<<<< HEAD
=======
    console.log('JwtService.saveToken');
>>>>>>> 6cd4ddbfc59e454306f2edb6c82658cb46cf886c
    window.localStorage['jwtToken'] = token;
  }
  saveProviderId(providerId: string) {
    window.localStorage['jwtProvider'] = providerId;
  }

  destroyToken() {
    console.log('JwtService.destroyToken');
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('jwtProvider');
  }

}
