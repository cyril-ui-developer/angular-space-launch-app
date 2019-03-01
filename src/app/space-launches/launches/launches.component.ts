import { Component, OnInit } from '@angular/core';
import { LunchesService } from '../lunches.service';
import { ILaunch } from '../launch';

@Component({
  selector: 'app-lunches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  lunches: ILaunch[];
  columnTitles: string[] = ['Flight Number', 'Launch Year', 'Rocket Name', 'Details'];
  columns: string[] = ['flightNumber', 'launchYear', 'rocketName', 'details'];
  // columns = [
  //   { flightNumber: 'Flight Number' },
  //   { launchYear: 'Launch Year'},
  //   { rocketName: 'Rocket Name' },
  //   { details: 'Details' }
  // ];

  constructor(private lunchesService: LunchesService) { }

  loadLaunches( limit: string, order: string) {
    this.lunchesService
      .getAllLunches(limit, order)
      .subscribe(data => (this.lunches = data));
  }

  ngOnInit() {
    this.loadLaunches('10', 'asc');
  }

  orderLaunches( order: string) {
    this.loadLaunches('10', order);
  }


}
