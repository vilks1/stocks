import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksTableComponent } from './components/stocks-table/stocks-table.component';
import { StocksViewComponent } from './components/stocks-view/stocks-view.component';


@NgModule({
  declarations: [
    StocksTableComponent,
    StocksViewComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
