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
    //console.log(this.launches)
  }

  loadPresskit(event: Event, presskit: string) {
  // this.router.navigateByUrl( 'presskit' );
  console.log(presskit)
  }
}
