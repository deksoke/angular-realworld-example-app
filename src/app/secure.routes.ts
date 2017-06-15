import { Routes } from "@angular/router";
import { AuthGuard } from "app/shared";


import { IndexComponent, Index2Component } from './dashboard';
import { MailboxComponent } from './mailbox/mailbox.component';
import { CalendarComponent } from './calendar/calendar.component';

export const SECURE_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard/index', pathMatch: 'full' }, //default page

    { path: 'dashboard', children: [
        { path: 'index', component: IndexComponent},
        { path: 'index2', component: Index2Component}
    ] },

    { path: 'mailbox', component: MailboxComponent },
    { path: 'calendar', component: CalendarComponent }
];