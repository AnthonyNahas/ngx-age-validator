import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAgeValidatorComponent } from './ngx-age-validator.component';

describe('NgxAgeValidatorComponent', () => {
  let component: NgxAgeValidatorComponent;
  let fixture: ComponentFixture<NgxAgeValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAgeValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAgeValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
