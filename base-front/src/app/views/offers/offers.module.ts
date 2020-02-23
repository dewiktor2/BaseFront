import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersUiComponent } from './components/offers-ui/offers-ui.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [OffersUiComponent],
  imports: [
    CommonModule,
    SharedModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
