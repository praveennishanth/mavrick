import { TestBed, inject } from '@angular/core/testing';

import { CoreService } from './core.service';

describe('CoreService', () => {
  let service:CoreService;
  let credentials : any;
  credentials = {name:"admin",password:"admin"}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreService]
    });
  });

  it('should be created', inject([CoreService], (service: CoreService) => {
    expect(service).toBeTruthy();
  }));

  it('#getValue should return array of users', () => {
    expect(service.getUserDetails).toBe('real value');
  });

  it('#getValue should return true', () => {
    expect(service.authenticate(credentials)).toBe(true);
  });
});
