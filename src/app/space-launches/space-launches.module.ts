import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { SpaceLaunchesRoutingModule } from './space-lunches-routing.module';
import { LaunchesComponent } from './launches/launches.component';
import { HttpClientModule } from '@angular/common/http';
import { LunchesService } from './lunches.service';
import { EllipsisPipe } from '../common/pipes/ellipsis';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';


@NgModule({
  declarations: [
    TableRowComponent,
    LaunchesComponent,
    EllipsisPipe,
    TableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbPaginationModule,
    SpaceLaunchesRoutingModule

  ],
  providers: [ LunchesService ]
})
export class SpaceLaunchesModule { }
