import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { SpaceLaunchesRoutingModule } from './space-lunches-routing.module';
import { LaunchesComponent } from './launches/launches.component';
import { HttpClientModule } from '@angular/common/http';
import { LunchesService } from './lunches.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LaunchesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbPaginationModule,
    SpaceLaunchesRoutingModule,
    SharedModule

  ],
  providers: [ LunchesService ]
})
export class SpaceLaunchesModule { }
