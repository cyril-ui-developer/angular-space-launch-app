import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Output()
  emitLaunch: EventEmitter<ILaunch> = new EventEmitter<ILaunch>();

  constructor(private router: Router) { }

  ngOnInit() {

  }

  openPresskit(launch: ILaunch) {
    this.emitLaunch.emit(launch);
  }
}
