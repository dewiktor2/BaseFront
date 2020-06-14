import { Component, Input } from "@angular/core";
export type ValidationType = 'required';

@Component({
  selector: "app-form-control-validation",
  templateUrl: './form-control-validation.component.html',
  styleUrls: ['./form-control-validation.component.scss']
})
export class FormControlValidationComponent  {

  @Input() validation: ValidationType;
  @Input() visible: boolean;

  constructor(){}
}
