import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  mappingFormData(form, formData) {
    _.forEach(Object.keys(formData), (value) => {
      let array = formData[name];
      if (form.controls[value]) {
        form.controls[value].patchValue(formData[value], { emitEvent: true });
      }
    });
    return form;
  }
  getFormErrorMessage(formGroupObj: FormGroup, errorObj: any) {
    for (let i in formGroupObj.controls) {
      var formControlObj = formGroupObj.controls[i];
      if (formControlObj instanceof FormControl) {
        if (formControlObj.errors) {
          //console.log(formControlObj.errors);
          if (errorObj[i]) {
            var errormsg = errorObj[i][Object.keys(formControlObj.errors)[0]];
            if (errormsg) {
              return errormsg;
            }
            else {
              return i + " is " + Object.keys(formControlObj.errors)[0]
            }
          }
          else {
            return i + " is " + Object.keys(formControlObj.errors)[0]
          }
          //  return errorObj[i][Object.keys(formControlObj.errors)[0]];
        }
      }
    }
  }
}
