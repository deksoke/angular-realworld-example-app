import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { EditorModule } from './editor/editor.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import { ExamplesModule } from './examples/examples.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule } from './forms/forms.module';
import { TablesModule } from './tables/tables.module';
import { BIChartsModule } from './charts/charts.module';
import { UiElementsModule } from './ui-elements/ui-elements.module';

import { MailboxComponent } from "./mailbox/mailbox.component";
import { CalendarComponent } from './calendar/calendar.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { environment } from './../environments/environment';

import {
  ApiService,
  ArticlesService,
  AuthGuard,
  CommentsService,
  JwtService,
  ProfilesService,
  CommonService,
  SharedModule,
  TagsService,
  UserService,
  PostService,
  DataService,
  MainHeaderComponent,
  MainFooterComponent,
  MainSidebarComponent,
  ControlSidebarComponent
} from './shared';

import { CalendarModule } from 'primeng/primeng';
import { AuthComponent } from './auth/auth.component';
import { Auth2Component } from './auth/auth2.component';
import { NoAuthGuard } from './auth/no-auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'mailbox', component: MailboxComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  {
    path: 'auth', children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Auth2Component, canActivate: [NoAuthGuard] },
      { path: 'register', component: Auth2Component, canActivate: [NoAuthGuard] }
    ]
  },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];

const appRoutes2: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'mailbox', component: MailboxComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  {
    path: 'auth', children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Auth2Component },
      { path: 'register', component: Auth2Component }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainSidebarComponent,
    ControlSidebarComponent,
    MailboxComponent,
    CalendarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    ArticleModule,
    AuthModule,
    EditorModule,
    HomeModule,
    ProfileModule,
    RouterModule.forRoot(appRoutes2),
    SharedModule,
    SettingsModule,
    ExamplesModule,
    NgbModule.forRoot(),
    SlimLoadingBarModule.forRoot(),

    DashboardModule,
    FormsModule,
    BIChartsModule,
    UiElementsModule,
    TablesModule,

    CalendarModule
  ],
  providers: [
    ApiService,
    ArticlesService,
    AuthGuard,
    CommentsService,
    JwtService,
    ProfilesService,
    TagsService,
    UserService,
    PostService,
    DataService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
