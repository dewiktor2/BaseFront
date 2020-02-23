import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruiterUiComponent } from './components/recruiter-ui/recruiter-ui.component';

const routes: Routes = [
  {
    path: '',
    component: RecruiterUiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
