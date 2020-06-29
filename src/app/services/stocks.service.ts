import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StocksService extends HttpService {
  public getList(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(this.createUrl('stocks.php'));
  }
}
