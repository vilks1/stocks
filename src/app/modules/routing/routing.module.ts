import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksViewComponent } from '../../components/stocks-view/stocks-view.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: StocksViewComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
