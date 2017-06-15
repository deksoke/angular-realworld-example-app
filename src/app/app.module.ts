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

import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule } from './forms/forms.module';
import { TablesModule } from './tables/tables.module';
import { BIChartsModule } from './charts/charts.module';
import { UiElementsModule } from './ui-elements/ui-elements.module';
import { MailboxComponent } from "./mailbox/mailbox.component";

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

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
import { CalendarComponent } from './calendar/calendar.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  { path: 'mailbox', component: MailboxComponent },
  { path: 'calendar', component: CalendarComponent }
], {
    useHash: true
  });

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
    ArticleModule,
    AuthModule,
    EditorModule,
    HomeModule,
    ProfileModule,
    rootRouting,
    SharedModule,
    SettingsModule,
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
