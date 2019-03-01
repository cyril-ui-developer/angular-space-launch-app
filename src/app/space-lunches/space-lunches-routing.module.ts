import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LunchesComponent } from './lunches/lunches.component';

const routes: Routes = [
  {
    path: '',
    component: LunchesComponent,
    children: [
      { path: '',
        redirectTo: '/lunches',
        pathMatch: 'full'
      },
      // {
      //   path: 'home',
      //   component: LunchesComponent
      // }
    ]
    }
  ];


@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
export class SpaceLunchesRoutingModule { }
