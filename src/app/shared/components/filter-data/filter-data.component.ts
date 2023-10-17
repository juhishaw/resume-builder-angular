import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.scss']
})
export class FilterDataComponent implements OnInit {
  public searchBy: string;
  @Output() getOutput: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  public getSearchString() {
    this.getOutput.emit(this.searchBy)
  }
}
