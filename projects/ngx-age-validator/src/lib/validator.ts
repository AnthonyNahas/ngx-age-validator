import {AbstractControl, ValidatorFn} from "@angular/forms";
import * as moment from 'moment';

export function NgxAgeValidator(min?: number, max?: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const birthday: Date = control.value as Date;
    if (birthday !== undefined && birthday instanceof Date) {
      const years = moment().diff(birthday, 'years');
      console.log("years", years);
      return {'ageValid': true};
    }
    return null;
  };
}
