import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
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

import {
  ApiService,
  ArticlesService,
  AuthGuard,
  CommentsService,
  JwtService,
  ProfilesService,
  SharedModule,
  TagsService,
  UserService,
  MainHeaderComponent,
  MainFooterComponent,
  MainSidebarComponent,
  ControlSidebarComponent
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
    { path: 'mailbox', component: MailboxComponent}
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
    MailboxComponent
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    AuthModule,
    EditorModule,
    HomeModule,
    ProfileModule,
    rootRouting,
    SharedModule,
    SettingsModule,
    NgbModule.forRoot(),
      
      DashboardModule,
      FormsModule,
      BIChartsModule,
      UiElementsModule,
      TablesModule
  ],
  providers: [
    ApiService,
    ArticlesService,
    AuthGuard,
    CommentsService,
    JwtService,
    ProfilesService,
    TagsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
