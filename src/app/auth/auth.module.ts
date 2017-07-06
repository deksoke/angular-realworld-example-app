import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { Auth2Component } from './auth2.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AuthComponent, 
    Auth2Component
  ],

  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}
