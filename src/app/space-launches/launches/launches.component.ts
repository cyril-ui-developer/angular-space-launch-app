import { Component, OnInit } from '@angular/core';

import { LunchesService } from '../lunches.service';
import { ILaunch } from '../launch';
import { pagination } from 'src/app/common/constants/pagination.constant';
import { order } from 'src/app/common/constants/order.constant';


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

  currentPage: number = pagination.currentPage;
  activeOrder: string = order.ascending;
  maxSize = pagination.maxSize;
  pageSize = pagination.pageSize;
  rotate = pagination.rotate;
  boundaryLinks = pagination.boundaryLinks;
  asc: string = order.ascending;
  desc: string = order.descending;

  constructor(private lunchesService: LunchesService) { }

  loadLaunches(limit: number, offset: number, order: string) {
    this.lunchesService
      .getAllLunches(limit, offset, order)
      .subscribe(data => (this.lunches = data));
  }

  ngOnInit() {
    this.loadLaunches(pagination.limit, pagination.offset, this.activeOrder);
  }

  orderLaunches( order: string) {
    this.activeOrder = order;
    this.currentPage = 1;
    // the default limit and offset are used for order action
    this.loadLaunches(pagination.limit, pagination.offset, order);
  }

  pageChange() {
    // the default order is used for pagination action
    this.loadLaunches(pagination.limit, (this.currentPage - 1) * pagination.limit, this.activeOrder);
  }
}
