import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { ChartsModule } from 'ng2-charts';

import { ChartjsComponent } from './chartjs/chartjs.component';
import { MorrisComponent } from './morris/morris.component';
import { Ng2GoogleChartsComponent } from './ng2-google-charts/ng2-google-charts.component';

import { Ng2ChartsComponent } from './ng2-charts/ng2-charts.component';
import { 
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    DynamicChartComponent
} from './ng2-charts';


const chartsRouting: ModuleWithProviders = RouterModule.forChild([
    { path: 'charts/chartjs', component: ChartjsComponent },
    { path: 'charts/morris', component: MorrisComponent },
    { path: 'charts/ng2charts', component: Ng2ChartsComponent },
    { path: 'charts/ng2googlecharts', component: Ng2GoogleChartsComponent }
]);

@NgModule({
  imports: [
      CommonModule,
      chartsRouting,
      ChartsModule
  ],
  declarations: [
      ChartjsComponent,
      MorrisComponent,
      Ng2GoogleChartsComponent,
      
      Ng2ChartsComponent,
      LineChartComponent,
      BarChartComponent,
      DoughnutChartComponent,
      RadarChartComponent,
      PieChartComponent,
      PolarAreaChartComponent,
      DynamicChartComponent
  ]
})
export class BIChartsModule { }
