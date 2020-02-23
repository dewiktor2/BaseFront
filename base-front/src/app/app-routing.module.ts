import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'recruiter',
    loadChildren: './views/recruiter/recruiter.module#RecruiterModule'
  },
  {
    path: 'configuration-panel',
    loadChildren: './views/configuration-panel/configuration-panel.module#ConfigurationPanelModule'
  },
  {
    path: 'offers',
    loadChildren: './views/offers/offers.module#OffersModule'
  },
  {
    path: 'candidate-panel',
    loadChildren: './views/candidate-panel/candidate-panel.module#CandidatePanelModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
