import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent<T> {

  @Input()
  rowData: T;

  @Input()
  columns: T[];

  @Output()
  emitRowData: EventEmitter<T> = new EventEmitter<T>();

  constructor() { }

  onEvent(data: T) {
    this.emitRowData.emit(data);
  }
}
