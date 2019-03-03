import { Component, OnInit, Input } from '@angular/core';
import { ILaunch } from '../launch';
import { Router } from '@angular/router';

@Component({
  selector: '[app-launch]',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  @Input() launch: ILaunch;
  @Input() columns: string[];
  constructor(private router: Router) { }

  ngOnInit() {

  }

  loadPresskit(event: Event, launch: ILaunch) {
    if (this.launch.presskit === undefined || this.launch.presskit === null) {
      console.log('Property presskit value is undefined or null!');
      event.preventDefault();
      return;
    }
    if (this.launch.presskit !== undefined || this.launch.presskit !== null) {
      window.open(this.launch.presskit, '_blank');
      return;
    }
  }
}
