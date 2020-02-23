import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateUiComponent } from './components/candidate-ui/candidate-ui.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateUiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatePanelRoutingModule { }
