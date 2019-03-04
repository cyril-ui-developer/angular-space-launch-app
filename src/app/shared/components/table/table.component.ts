import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { ILaunch } from '../launch';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  columnTitles: any[];

  @Input()
  columns: any[];

  @Input()
  tableData: any[];

  @Output()
  emitData: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onEvent(data: any){
    this.emitData.emit(data);
  }
}
