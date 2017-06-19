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
  UserFireBaseService,
  
  MainHeaderComponent,
  MainFooterComponent,
  MainSidebarComponent,
  ControlSidebarComponent
} from './shared';

import { CalendarModule } from 'primeng/primeng';

import { SecureComponent, PublicComponent } from './shared';
import { PUBLIC_ROUTES } from './public.routes';
import { SECURE_ROUTES } from './secure.routes';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, data: { title: 'Secure Views' }, children: SECURE_ROUTES },
  { path: '**', redirectTo: 'login' }
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
    BrowserModule,
    BrowserAnimationsModule,
    ArticleModule,
    AuthModule,
    EditorModule,
    HomeModule,
    ProfileModule,
    RouterModule.forRoot(routes),
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
    CommonService,
    UserFireBaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
