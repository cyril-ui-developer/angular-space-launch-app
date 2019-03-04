import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableComponent } from './components/table/table.component';
import { EllipsisPipe } from './pipes/ellipsis';


@NgModule({
  declarations: [
    TableRowComponent,
    EllipsisPipe,
    TableComponent
  ],
  exports: [
    TableRowComponent,
    EllipsisPipe,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
