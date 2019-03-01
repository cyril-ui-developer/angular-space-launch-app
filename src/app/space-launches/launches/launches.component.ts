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

  constructor(private lunchesService: LunchesService) { }

  ngOnInit() {
    this.lunchesService.getAllLunches()
    .subscribe((data) => this.lunches = data);
  }

}
