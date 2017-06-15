import { Routes } from "@angular/router";
import { AuthGuard } from "app/shared";

import { MailboxComponent } from './mailbox/mailbox.component';
import { CalendarComponent } from './calendar/calendar.component';

export const SECURE_ROUTES: Routes = [
    { path: 'mailbox', component: MailboxComponent },
    { path: 'calendar', component: CalendarComponent }
];