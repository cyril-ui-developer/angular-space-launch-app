import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { ILaunch } from '../launch';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input()
  rowData: any;

  @Input()
  columns: any[];

  @Output()
  emitRowData: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  onEvent(data: any) {
    this.emitRowData.emit(data);
  }
}
