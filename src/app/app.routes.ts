import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard, AuthFireBaseGuard } from "app/shared";



//root
import { MailboxComponent } from "./mailbox/mailbox.component";
import { CalendarComponent } from './calendar/calendar.component';

//dashboard
import { Index2Component as dash_index2 } from './dashboard/index2/index2.component';
import { IndexComponent as dash_index} from './dashboard/index/index.component';

//auth
import { AuthComponent as auth_index } from './auth/auth.component';
import { Auth2Component as auth_index2 } from './auth/auth2.component';
import { NoAuthGuard } from './auth/no-auth-guard.service';


// export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot([
//     { path: '', redirectTo: 'auth', pathMatch: 'full' },
//     { path: 'auth', children: [
//         { path: '', redirectTo: 'login', pathMatch: 'full' },
//         { path: 'login', component: auth_index, canActivate: [NoAuthGuard] },
//         { path: 'register', component: auth_index2, canActivate: [NoAuthGuard] }
//     ]},
//     { path: 'mailbox', component: MailboxComponent, canActivate: [AuthFireBaseGuard] },
//     { path: 'calendar', component: CalendarComponent, canActivate: [AuthFireBaseGuard]},
//     { path: 'dashboard', children: [
//         { path: '', redirectTo: 'index', pathMatch: 'full' },
//         { path: 'index', component: dash_index, canActivate: [AuthFireBaseGuard] },
//         { path: 'index2', component: dash_index2, canActivate: [AuthFireBaseGuard] }
//     ]}
// ]);


export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot([
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: auth_index2},
        { path: 'register', component: auth_index2 }
    ]},
    { path: 'mailbox', component: MailboxComponent, canActivate: [AuthFireBaseGuard] },
    { path: 'calendar', component: CalendarComponent, canActivate: [AuthFireBaseGuard]},
    { path: 'dashboard', children: [
        { path: '', redirectTo: 'index', pathMatch: 'full' },
        { path: 'index', component: dash_index, canActivate: [AuthFireBaseGuard] },
        { path: 'index2', component: dash_index2, canActivate: [AuthFireBaseGuard] }
    ]}
]);