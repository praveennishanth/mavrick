import { TestBed, inject } from '@angular/core/testing';

import { GuardService } from './guard.service';
import { StorageService } from './storage.service'

describe('GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardService,StorageService]
    });
  });

  it('should be created', inject([GuardService], (service: GuardService) => {
    expect(service).toBeTruthy();
  }));

  it('Should call canActivate method', inject([GuardService], (service: GuardService) => {
    expect(service.canActivate).toBeTruthy();
  }));
  
  it('Should call isLoggedIn method', inject([GuardService], (service: GuardService) => {
    expect(service.isLoggedIn).toBeTruthy();
  }));
});
