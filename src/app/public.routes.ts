import { Routes } from "@angular/router/router";

import { LoginComponent } from './examples/login/login.component';

export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }    
];