import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() dataObject: any;
  form: any
  objectProps: any

  constructor() { }

  ngOnInit(): void {
    this.objectProps = Object.keys(this.dataObject).map((props) => {
      return Object.assign({}, { key: props }, this.dataObject[props])
    })
    const formGroup:any ={}
    for(let props of Object.keys(this.dataObject)){
      formGroup[props]= new FormControl(this.dataObject[props].value || "", this.mapValidattors(this.dataObject[props].validator))
    }
    this.form =  new FormGroup(formGroup)

  }

  mapValidattors(validators: any) {
    const formValidator = []
    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidator.push(Validators.required)
        } else if (validation === 'min') {
          formValidator.push(Validators.min(validators[validation]))

        }
      }
    }
    return formValidator
  }

}
