import {Component, OnInit} from '@angular/core';
import {FormControl, ValidationErrors} from "@angular/forms";
import {NgxAgeValidator} from "ngx-age-validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngx-age-validator-demo';

  ageFormControl = new FormControl();

  ngOnInit(): void {
    this.ageFormControl = new FormControl(null, [NgxAgeValidator(18, 40)])

    this.ageFormControl.valueChanges.subscribe(() => {

      const controlErrors: ValidationErrors | null = this.ageFormControl.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log(' keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }

    })
  }


}
