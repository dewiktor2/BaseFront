import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  AfterContentChecked,
  ChangeDetectionStrategy
} from "@angular/core";
import { AbstractControl } from '@angular/forms';
import { FormControlValidationComponent } from '../../components/form-control-validation/form-control-validation.component';
@Component({
  selector: "app-form-validator",
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormValidatorComponent implements AfterContentChecked {
  @ContentChildren(FormControlValidationComponent) childs: QueryList<FormControlValidationComponent>
  @Input() control: AbstractControl;
  constructor() {
  }

  ngAfterContentChecked() {
    this.childs.forEach((child: FormControlValidationComponent) => {
      child.visible = this.control.invalid &&
        (this.control.dirty || this.control.touched) &&
        this.control.hasError(child.validation);
    });
  }
}
