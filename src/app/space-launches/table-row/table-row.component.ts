import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ILaunch } from '../launch';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input()
  rowData: ILaunch;

  @Input()
  columns: string[];

  @Output()
  emitRowData: EventEmitter<ILaunch> = new EventEmitter<ILaunch>();

  constructor() { }

  ngOnInit() {

  }

  onEvent(data: ILaunch) {
    this.emitRowData.emit(data);
  }
}
