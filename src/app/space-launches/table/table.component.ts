import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ILaunch } from '../launch';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  columnTitles: string[];

  @Input()
  columns: string[];

  @Input()
  tableData: ILaunch[];

  @Output()
  emitData: EventEmitter<ILaunch> = new EventEmitter<ILaunch>();

  constructor() { }

  ngOnInit() {
  }

  onEvent(data: ILaunch){
    this.emitData.emit(data);
  }
}
