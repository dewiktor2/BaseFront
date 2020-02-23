import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationPanelUiComponent } from './components/configuration-panel-ui/configuration-panel-ui.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationPanelUiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationPanelRoutingModule { }
