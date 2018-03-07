import { TestBed, inject } from '@angular/core/testing';

import { CoreService } from './core.service';
import { HttpClientModule,HttpClient, HttpHandler } from '@angular/common/http';
import { Headers, Response } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('CoreService', () => {
  let service:CoreService;
  
  let credentials = {username:"admin",password:"admin"}
  let InvalidCredentials = {username:"",password:""}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        CoreService,
        HttpClient,
        HttpHandler
      ]
    });
  });

  it('should be created', inject([CoreService], (service: CoreService) => {
    expect(service).toBeTruthy();
  }));
  
  it('Should call authenticate method', inject([CoreService], (service: CoreService) => {
    expect(service.authenticate).toBeTruthy();
  }));
  it('Should call getUserDetails method', inject([CoreService], (service: CoreService) => {
    expect(service.getUserDetails).toBeTruthy();
  }));

  it('Should suceeded Authentication ', inject([CoreService], (service: CoreService) => {
    expect(service.authenticate(credentials)).toBe(true);
  }));
  it('Should fail Authentication ', inject([CoreService], (service: CoreService) => {
    expect(service.authenticate(InvalidCredentials)).toBe(false);
  }));
});
