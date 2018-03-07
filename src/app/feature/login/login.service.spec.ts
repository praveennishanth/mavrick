import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { CoreService } from '../../core/core.service'
import { StorageService } from '../../core/storage.service'
import { RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule,HttpClient, HttpHandler } from '@angular/common/http';
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
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule],
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
});
