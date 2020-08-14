import {Component, OnInit, ViewChild} from '@angular/core';
import {StocksTableComponent} from '../stocks-table/stocks-table.component';

@Component({
  selector: 'app-stocks-view',
  templateUrl: './stocks-view.component.html',
  styleUrls: ['./stocks-view.component.scss']
})
export class StocksViewComponent implements OnInit {
  @ViewChild(StocksTableComponent) stocksTableComponent: StocksTableComponent;

  public title = 'Stocks';
  public currentDate: Date;
  public dayCounter: number;

  constructor() { }

  ngOnInit(): void {
    this.dayCounter = 0;
    this.currentDate = new Date();
  }

  updateApp(): void {
    this.dayCounter += 1;

    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.currentDate = new Date(this.currentDate.toUTCString());
    this.stocksTableComponent.updateTable();
  }

}
