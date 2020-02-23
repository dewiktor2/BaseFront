import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersUiComponent } from './components/offers-ui/offers-ui.component';

const routes: Routes = [
  {
    path: '',
    component: OffersUiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
