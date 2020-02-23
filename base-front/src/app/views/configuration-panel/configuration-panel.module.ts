import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationPanelRoutingModule } from './configuration-panel-routing.module';
import { ConfigurationPanelUiComponent } from './components/configuration-panel-ui/configuration-panel-ui.component';

@NgModule({
  declarations: [ConfigurationPanelUiComponent],
  imports: [
    CommonModule,
    ConfigurationPanelRoutingModule
  ]
})
export class ConfigurationPanelModule { }
