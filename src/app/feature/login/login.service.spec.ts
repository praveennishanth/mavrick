import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { CoreService } from '../../core/core.service'
import { StorageService } from '../../core/storage.service'
import { RouterModule, Router,Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule,HttpClient, HttpHandler } from '@angular/common/http';
import { HomeComponent } from '../home/home/home.component'
const fakeActivatedRoute = {
  snapshot: { url: [
    {
        path: 'home',
    },
    {
        path: 'product',
    }
], }
} as ActivatedRoute;



class MockRouter {
  navigate = jasmine.createSpy('home');
}
describe('LoginService', () => {
  let component: HomeComponent;
  let router: Router;
  let spy:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      providers: [
        LoginService, 
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: Router, useClass: MockRouter},
        CoreService, 
        HttpClient,
        StorageService
       
      ]
    });

  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
  it ('should call the signIn method', inject([LoginService], (service: LoginService)=>{
    expect(service.signIn()).toBe(undefined);
  }));
  it ('the authenticate method should pass', inject([LoginService], (service: LoginService)=>{
    expect(service.authenticate({username:'admin',password:'admin'})).toBe(undefined);
  }));

  it ('the authenticate method should fail', inject([LoginService], (service: LoginService)=>{
    expect(service.authenticate({username:'',password:''})).toBe(undefined);
  }));

  it ('should call the invalidUser method', inject([LoginService], (service: LoginService)=>{
    expect(service.invalidUser()).toBe(undefined);
  }));

});
