import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@NgModule({
  declarations: [],
  imports: [
    NzButtonModule
    , NzIconModule
    , NzDropDownModule
  ],
  exports: [NzButtonModule
    , NzIconModule
    , NzDropDownModule]
})
export class AntdBaseModule {}
