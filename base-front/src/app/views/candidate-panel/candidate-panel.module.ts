import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatePanelRoutingModule } from './candidate-panel-routing.module';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidateUiComponent } from './components/candidate-ui/candidate-ui.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CandidateComponent, CandidateUiComponent],
  imports: [
    CommonModule,
    SharedModule,
    CandidatePanelRoutingModule
  ]
})
export class CandidatePanelModule { }
