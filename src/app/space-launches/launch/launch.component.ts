import { Component, OnInit, Input } from '@angular/core';
import { ILaunch } from '../launch';

@Component({
  selector: '[app-launch]',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  @Input() launch: ILaunch;
  @Input() columns: string[];
  constructor() { }

  ngOnInit() {
  }

}
