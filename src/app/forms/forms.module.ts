import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { NgSelectizeModule } from 'ng-selectize';

import { GeneralElementsComponent } from './general-elements/general-elements.component';
import { AdvancedElementsComponent } from './advanced-elements/advanced-elements.component';
import { EditorsComponent } from './editors/editors.component';

const formsRouting: ModuleWithProviders = RouterModule.forChild([
    { path: 'forms/general', component: GeneralElementsComponent },
    { path: 'forms/advanced', component: AdvancedElementsComponent },
    { path: 'forms/editors', component: EditorsComponent }
]);

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      formsRouting,
      NgSelectizeModule
  ],
  declarations: [
      GeneralElementsComponent, 
      AdvancedElementsComponent, 
      EditorsComponent
  ]
})
export class FormsModule { }
