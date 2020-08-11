import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './modules/routing/routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StocksTableComponent } from './components/stocks-table/stocks-table.component';
import { StocksViewComponent } from './components/stocks-view/stocks-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksTableComponent,
    StocksViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
