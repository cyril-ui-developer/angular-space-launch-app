import { Component,Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {

  @Input()
  columnTitles: T[];

  @Input()
  columns: T[];

  @Input()
  tableData: T[];

  @Output()
  emitData: EventEmitter<T> = new EventEmitter<T>();

  constructor() { }

  onEvent(data: T) {
    this.emitData.emit(data);
  }
}
