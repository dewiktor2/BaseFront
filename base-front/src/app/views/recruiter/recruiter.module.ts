import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { RecruiterUiComponent } from './components/recruiter-ui/recruiter-ui.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RecruiterUiComponent],
  imports: [
    CommonModule,
    SharedModule,
    RecruiterRoutingModule
  ]
})
export class RecruiterModule { }
