import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksViewComponent } from './components/stocks-view/stocks-view.component';


const routes: Routes = [
  { path: 'view', component: StocksViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
