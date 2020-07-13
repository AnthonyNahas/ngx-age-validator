import { TestBed } from '@angular/core/testing';

import { NgxAgeValidatorService } from './ngx-age-validator.service';

describe('NgxAgeValidatorService', () => {
  let service: NgxAgeValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAgeValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
