import { Component, OnInit } from '@angular/core';
import { Stock } from './models/stock';
import { StocksService } from './services/stocks.service';
import { PriceCalculator } from './classes/priceCalculator.class';
import { NewPrice } from './models/newPrice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Stocks';
  public stocks: Array<Stock>;
  public currentDate: Date;
  public dayCounter: number;

  constructor(private stocksService: StocksService) { }

  ngOnInit(): void {
    this.dayCounter = 0;
    this.currentDate = new Date();
    this.stocks = new Array<Stock>();
    this.stocksService.getList().subscribe((stocks: Array<Stock>) => {
      this.stocks = stocks.map(stock => {
        stock.initialPrice = stock.price;
        stock.absoluteChange = 0;
        return stock;
      });
    });
  }

  updateTable(): void {
    // update date
    this.dayCounter += 1;

    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.currentDate = new Date(this.currentDate.toUTCString());

    new PriceCalculator().getRecalculatedPrice(15);
    this.stocks = this.stocks.map(stock => {
      const newPrice: NewPrice = new PriceCalculator().getRecalculatedPrice(stock.price);
      stock.price = newPrice.newPrice;
      stock.percentageChange = ((newPrice.newPrice - stock.initialPrice) / stock.initialPrice * 100) / 100;
      stock.absoluteChange = newPrice.newPrice - stock.initialPrice;
      return stock;
    });
  }
}
