import { TestBed } from '@angular/core/testing';

import { RegistroBdService } from './registro-bd.service';

describe('RegistroBdService', () => {
  let service: RegistroBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroBdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
