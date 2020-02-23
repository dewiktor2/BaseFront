import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DxButtonModule } from 'devextreme-angular';

@NgModule({ 
  declarations: [],
  exports:[TranslateModule, DxButtonModule],
  imports: [
    DxButtonModule,
    CommonModule,
  ]
})
export class SharedModule { }
