import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TestComponent } from './container/test/test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    SharedModule,
    TestRoutingModule
  ]
})
export class TestModule { }
