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
    this.objectProps = Object.keys(this.dataObject)
    .map(prop => {
      return Object.assign({}, { key: prop }, this.dataObject[prop])
    })
    const formGroup: any = {}
    for (let property of Object.keys(this.dataObject)) {
      formGroup[property] = new FormControl(this.dataObject[property].value || '', this.mapValidators(this.dataObject[property].validation));
    }
    this.form = new FormGroup(formGroup);
  }

  mapValidators(validators: any) {
    // console.log("vv",validators);
    
    const formValidators = [];
    if (validators) {
      for (const validation of Object.keys(validators)) {
        // console.log(validation);
        if (validation === 'required') {
          formValidators.push(Validators.required);
          
        }
         else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]))
        }
         else if (validation === 'pattern') {
          formValidators.push(Validators.pattern(validators[validation]))
        }
      }
    } 
    // console.log("arr",formValidators);  
    return formValidators
  }

  
  onSubmit(form:any){

    console.log(form.get(this.objectProps[2].key));
    
    console.log(this.objectProps);
    console.log("okok",this.dataObject);
    
  }

}
