import { Routes } from "@angular/router";
import { AuthGuard } from "app/shared";


import { IndexComponent, Index2Component } from './dashboard';
import { MailboxComponent } from './mailbox/mailbox.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NoAuthGuard } from "app/auth/no-auth-guard.service";
//import { LoginComponent } from './examples/login/login.component';


export const SECURE_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard/index', pathMatch: 'full' }, //default page

    { path: 'dashboard', canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
        { path: '', redirectTo: 'index', pathMatch: 'full' },
        { path: 'index', component: IndexComponent},
        { path: 'index2', component: Index2Component}
    ] },
    // { path: 'auth', children: [
    //     { path: '', redirectTo: 'login', pathMatch: 'full' },
    //     { path: 'login', component: IndexComponent, canActivate: [NoAuthGuard]},
    //     { path: 'register', component: Index2Component, canActivate: [NoAuthGuard]}
    // ] },

    { path: 'mailbox', component: MailboxComponent },
    { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] }
];