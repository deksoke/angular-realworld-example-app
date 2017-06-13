import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared';
import { Index2Component } from './index2/index2.component';
import { IndexComponent } from './index/index.component';

const dashboardRouting: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: IndexComponent },
  { path: 'dashboard/index2', component: Index2Component }
]);

@NgModule({
    imports: [
        dashboardRouting,
        SharedModule,
        NgbModule,
        ChartsModule
    ],
    exports: [],
    declarations: [
        Index2Component,
        IndexComponent
    ],
    providers: [],
})
export class DashboardModule { }
