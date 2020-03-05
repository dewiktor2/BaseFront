import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AntdBaseModule } from './antd-modules/antd-base.module';
@NgModule({ 
  declarations: [],
  imports: [
    CommonModule,
    AntdBaseModule
  ],
  exports: [
    TranslateModule,
    AntdBaseModule
  ],
})
export class SharedModule { }
