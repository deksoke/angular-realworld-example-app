import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';

import { SimpleTablesComponent } from './simple-tables/simple-tables.component';
import { DataTablesComponent } from './data-tables/data-tables.component';


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: 'tables/simple', component: SimpleTablesComponent },
    { path: 'tables/data', component: DataTablesComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    PaginationModule,
  ],
  declarations: [
    SimpleTablesComponent, 
    DataTablesComponent
  ],
  providers: [ PaginationConfig ]
})
export class TablesModule { }
