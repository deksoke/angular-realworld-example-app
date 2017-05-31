import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';


import { IconsComponent } from './icons/icons.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalsComponent } from './modals/modals.component';
import { TimelineComponent } from './timeline/timeline.component';
import { GeneralComponent } from './general/general.component';
import { SlidersComponent } from './sliders/sliders.component';


const uiRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'ui/general', component: GeneralComponent },
  { path: 'ui/icons', component: IconsComponent },
  { path: 'ui/buttons', component: ButtonsComponent },
  { path: 'ui/sliders', component: SlidersComponent },
  { path: 'ui/timeline', component: TimelineComponent },
  { path: 'ui/modals', component: ModalsComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    uiRouting
  ],
  declarations: [
    IconsComponent, 
    ButtonsComponent, 
    ModalsComponent, 
    TimelineComponent, 
    GeneralComponent, 
    SlidersComponent
  ]
})
export class UiElementsModule { }
