import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './launches/launches.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesComponent,
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
export class SpaceLaunchesRoutingModule { }
