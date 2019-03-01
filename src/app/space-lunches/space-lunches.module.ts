import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceLunchesRoutingModule } from './space-lunches-routing.module';
import { LunchComponent } from './lunch/lunch.component';
import { LunchesComponent } from './lunches/lunches.component';
import { PresskitComponent } from './presskit/presskit.component';


@NgModule({
  declarations: [
    LunchComponent,
    LunchesComponent,
    PresskitComponent
  ],
  imports: [
    CommonModule,
    SpaceLunchesRoutingModule
  ]
})
export class SpaceLunchesModule { }
