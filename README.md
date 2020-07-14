<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.jsdelivr.net/gh/angular-material-extensions/select-country@master/assets/angular-material-extensions-logo.svg">
</p>

# ngx-age-validator - Angular custom validator to validate a given age using momentjs

[![npm version](https://badge.fury.io/js//ngx-age-validator.svg)](https://badge.fury.io/js/ngx-age-validator)
[![demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/ngx-age-validator)
[![docs: typedoc](https://img.shields.io/badge/docs-typedoc-4D0080.svg)](https://anthonynahas.github.io/ngx-age-validator/doc/index.html)
[![Build Status](https://travis-ci.org/AnthonyNahas/ngx-age-validator.svg?branch=master)](https://travis-ci.org/AnthonyNahas/ngx-age-validator)
[![Join the chat at https://gitter.im/ngx-age-validator/Lobby](https://badges.gitter.im/ngx-age-validator/Lobby.svg)](https://gitter.im/ngx-age-validator/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-age-validator/status.svg)](https://david-dm.org/anthonynahas/ngx-age-validator)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-age-validator/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-age-validator#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/ngx-age-validator.svg?style=flat-square)](https://www.npmjs.com/package/ngx-age-validator)
[![Greenkeeper badge](https://badges.greenkeeper.io/AnthonyNahas/ngx-age-validator.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-age-validator.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-age-validator/blob/master/LICENSE)

### We assume the following example: minimum age: 18 years old - maximum age 40 years old

<p align="center">
  <img alt="@angular-material-extensions/select-country demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-age-validator/HEAD/assets/v1/ex1.gif">
</p>


## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/select-country/issues)

If you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Run Demo App Locally](#run-demo-app-locally)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://anthonynahas.github.io/ngx-age-validator)



## Library's validator

- `NgxAgeValidator` used to validate the age for a given date 


---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) developed and tested with `10.x`

---

<a name="installation"/>

##  Installation
  

```shell
npm i -s ngx-age-validator
```


<a name="api"/>

## API

#### Errors

`tooJung` if the `min` argument > as the difference between the given date and today
`tooOld` if the `min` argument < as the difference between the given date and today



<a name="usage"/>

## Usage


#### Use the library with reactive forms 



```html
<mat-form-field appearance="outline">
      <mat-label>Choose a date</mat-label>
      <input matInput [matDatepicker]="picker" [formControl]="ageFormControl">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
      <mat-error>Error</mat-error>
      <mat-error *ngIf="ageFormControl.hasError('tooJung')">You are too jung!</mat-error>
      <mat-error *ngIf="ageFormControl.hasError('tooOld')">You are too old!</mat-error>
</mat-form-field>
```



```typescript
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

```

<p align="center">
  <img alt="@angular-material-extensions/select-country demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-age-validator/HEAD/assets/v1/tooJung.png">
</p>


<p align="center">
  <img alt="@angular-material-extensions/select-country demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-age-validator/HEAD/assets/v1/tooOld.png">
</p>

<a name="run-demo-app-locally"/>

###  Run Demo App Locally


Build the library

```bash
$ npm run build:lib
```

Serve the demo app

```bash
$ npm start
```



## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/fab-menu](https://github.com/angular-material-extensions/fab-menu)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/select-country/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](https://raw.githubusercontent.com/angular-material-extensions/select-country/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2020 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

