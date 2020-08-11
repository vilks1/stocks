import { Component, OnInit } from '@angular/core';
import {PriceCalculator} from '../../classes/priceCalculator.class';
import {NewPrice} from '../../models/newPrice';
import {Stock} from '../../models/stock';
import {StocksService} from '../../services/stocks.service';

@Component({
  selector: 'app-stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.scss']
})
export class StocksTableComponent implements OnInit {

  public stocks: Array<Stock>;

  constructor(private stocksService: StocksService) { }

  ngOnInit(): void {
    this.stocks = new Array<Stock>();
    this.initStocksList();
  }

  initStocksList(): void {
    this.stocksService.getList().subscribe((stocks: Array<Stock>) => {
      this.stocks = stocks.map(stock => {
        stock.initialPrice = stock.price;
        stock.absoluteChange = 0;
        return stock;
      });
    });
  }

  updateTable(): void {
    this.stocks = this.stocks.map(stock => {
      const newPrice: NewPrice = new PriceCalculator().getRecalculatedPrice(stock.price);
      stock.price = newPrice.newPrice;
      stock.percentageChange = ((newPrice.newPrice - stock.initialPrice) / stock.initialPrice * 100) / 100;
      stock.absoluteChange = newPrice.newPrice - stock.initialPrice;
      return stock;
    });
  }
}
