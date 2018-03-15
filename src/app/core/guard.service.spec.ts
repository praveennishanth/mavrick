import { TestBed, inject } from '@angular/core/testing';

import { GuardService } from './guard.service';
import { StorageService } from './storage.service'

describe('GuardService', () => {
  let spy:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardService,StorageService]
    });
  });

  it('should be created', inject([GuardService], (service: GuardService) => {
    expect(service).toBeTruthy();
  }));

  it('Should call canActivate method', inject([GuardService], (service: GuardService) => {
    spy= spyOn(service,'isLoggedIn').and.returnValue(true);
    expect(service.canActivate()).toBe(true);
  }));

  it('Should call canActivate method', inject([GuardService], (service: GuardService) => {
    spy= spyOn(service,'isLoggedIn').and.returnValue(false);
    expect(service.canActivate()).toBe(false);
  }));
  
  it('Should call isLoggedIn method', inject([GuardService], (service: GuardService) => {
    expect(service.isLoggedIn()).Any;
  }));

});
