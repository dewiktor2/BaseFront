import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AntdBaseModule } from './antd-modules/antd-base.module';
import { FormValidatorComponent } from './containers/form-validator/form-validator.component';
import { FormControlValidationComponent } from './components/form-control-validation/form-control-validation.component';
@NgModule({ 
  declarations: [
    FormValidatorComponent,
    FormControlValidationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    FormValidatorComponent,
    FormControlValidationComponent,
    AntdBaseModule
  ]
})
export class SharedModule { }
