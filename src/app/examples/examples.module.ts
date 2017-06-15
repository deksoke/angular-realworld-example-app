import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { RegisterComponent } from './register/register.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { BlankPageComponent } from './blank-page/blank-page.component';


const routes: ModuleWithProviders = RouterModule.forChild([
  { path: 'examples/invoice', component: InvoiceComponent },
  { path: 'examples/profile', component: ProfileComponent },
  { path: 'examples/login', component: LoginComponent },
  { path: 'examples/lockscreen', component: LockScreenComponent },
  { path: 'examples/register', component: RegisterComponent },
  { path: 'examples/404', component: Error404Component },
  { path: 'examples/500', component: Error500Component },
  { path: 'examples/blank', component: BlankPageComponent }
]);


@NgModule({
  imports: [
    CommonModule,
    routes
  ],
  declarations: [
    InvoiceComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    Error404Component,
    Error500Component,
    BlankPageComponent,
    LockScreenComponent
  ]
})
export class ExamplesModule { }
