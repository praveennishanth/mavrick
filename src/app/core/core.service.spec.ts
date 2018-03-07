import { TestBed, inject } from '@angular/core/testing';

import { CoreService } from './core.service';
import { HttpClientModule,HttpClient, HttpHandler } from '@angular/common/http';
import { Headers, Response } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('CoreService', () => {
  let service:CoreService;
  let credentials : any;
  credentials = {username:"admin",password:"admin"}

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
  
  // it('#getValue should return array of users', () => {
  //   expect(service.getUserDetails).toBe('real value');
  // });

  // it('#getValue should return true', () => {
  //   expect(service.authenticate(credentials)).toBe(true);
  // });
});
