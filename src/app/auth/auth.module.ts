import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { Auth2Component } from './auth2.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { SharedModule } from '../shared';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'auth', children: [
      { path: 'login', component: Auth2Component, canActivate: [NoAuthGuard] },
      { path: 'register', component: Auth2Component, canActivate: [NoAuthGuard] }
    ]
  }
]);

@NgModule({
  imports: [
    authRouting,
    SharedModule
  ],
  declarations: [
    AuthComponent, Auth2Component
  ],

  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}
