import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

type ValidationType = 'required';

@Component({
    selector: "app-form-control-validation",
    templateUrl: './form-control-validation.component.html',
    styleUrls: ['./form-control-validation.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FormControlValidationComponent  {

  @Input() validation: ValidationType;
  @Input() visible: boolean;

  constructor(){}
}
