import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceLaunchesRoutingModule } from './space-lunches-routing.module';
import { LaunchComponent } from './launch/launch.component';
import { LaunchesComponent } from './launches/launches.component';
import { HttpClientModule } from '@angular/common/http';
import { LunchesService } from './lunches.service';


@NgModule({
  declarations: [
    LaunchComponent,
    LaunchesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SpaceLaunchesRoutingModule
  ],
  providers: [ LunchesService ]
})
export class SpaceLaunchesModule { }
