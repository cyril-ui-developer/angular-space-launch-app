import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { SpaceLaunchesRoutingModule } from './space-lunches-routing.module';
import { LaunchComponent } from './launch/launch.component';
import { LaunchesComponent } from './launches/launches.component';
import { HttpClientModule } from '@angular/common/http';
import { LunchesService } from './lunches.service';
import { EllipsisPipe } from '../common/pipes/ellipsis';


@NgModule({
  declarations: [
    LaunchComponent,
    LaunchesComponent,
    EllipsisPipe
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
