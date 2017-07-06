import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { CalendarModule } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
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
import { AuthModule } from './auth/auth.module';

import { MailboxComponent } from "./mailbox/mailbox.component";
import { CalendarComponent } from './calendar/calendar.component';


import {
  ApiService,
  ArticlesService,
  AuthGuard,
  AuthFireBaseGuard,

  CommentsService,
  JwtService,
  ProfilesService,
  CommonService,
  SharedModule,
  TagsService,
  UserService,
  PostService,
  DataService,
  UserFireBaseService,
  
  MainHeaderComponent,
  MainFooterComponent,
  MainSidebarComponent,
  ControlSidebarComponent
} from './shared';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from './../environments/environment';

import { Index2Component as dash_index2 } from './dashboard/index2/index2.component';
import { IndexComponent as dash_index} from './dashboard/index/index.component';

//auth
import { AuthComponent as auth_index } from './auth/auth.component';
import { Auth2Component as auth_index2 } from './auth/auth2.component';
import { NoAuthGuard } from './auth/no-auth-guard.service';

import { APP_ROUTES } from './app.routes';

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
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    NgbModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    CalendarModule, //PrimeNG

    ArticleModule,
    EditorModule,
    HomeModule,
    ProfileModule,
    SharedModule,
    SettingsModule,
    ExamplesModule,

    DashboardModule,
    FormsModule,
    BIChartsModule,
    UiElementsModule,
    TablesModule,
    AuthModule
  ],
  providers: [
    ApiService,
    ArticlesService,
    CommentsService,
    JwtService,
    ProfilesService,
    TagsService,
    UserService,
    PostService,
    DataService,
    CommonService,

    AuthGuard,
    NoAuthGuard,
    AuthFireBaseGuard,
    UserFireBaseService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
