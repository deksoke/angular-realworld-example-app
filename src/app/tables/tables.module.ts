import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTablesComponent } from './simple-tables/simple-tables.component';
import { DataTablesComponent } from './data-tables/data-tables.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleTablesComponent, DataTablesComponent]
})
export class TablesModule { }
