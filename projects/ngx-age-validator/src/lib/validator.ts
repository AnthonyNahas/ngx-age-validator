import {AbstractControl, ValidatorFn} from "@angular/forms";
import * as moment from 'moment';

export function NgxAgeValidator(min?: number, max?: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const birthday: Date = control.value as Date;
    console.log("birthday", birthday);
    if (birthday !== undefined) {
      const years = moment().diff(birthday, 'years');
      console.log("years", years);
      if (min && min > years) {
        return {'tooJung': true}
      }
      if (max && max < years) {
        return {'tooOld': true}
      }
      return null;
    }
    return {'ageValidation': true};
  };
}
