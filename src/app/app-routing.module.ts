import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'stocks', loadChildren: () => import('./modules/stocks/stocks.module').then(m => m.StocksModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
