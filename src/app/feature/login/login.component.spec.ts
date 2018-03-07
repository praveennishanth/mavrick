import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule,HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service'
import { CoreService } from '../../core/core.service'
import { StorageService } from '../../core/storage.service'
import { CoreServiceMock } from '../../mock/core.service.mock'
import { Directive, Input, Output, EventEmitter } from '@angular/core';


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
class StorageMockService {
  setString(key, value){
    localStorage.setItem(key, value);
  }
  getString(key){
    return localStorage.getItem(key);
  }
}

class MockLoginService{
  public authenticate (data ){return data;}
}
@Directive({
  selector: 'app-login-form'
})
class MockLoginFormDirective {
  @Output('event')
  public clickEmitter = new EventEmitter<void>();
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [ LoginComponent, MockLoginFormDirective],
      providers:[
        LoginService,
        // {provide:LoginService, useClass:MockLoginService},
        StorageService,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: Router, useClass: MockRouter},
        {provide: CoreService, useClass: CoreServiceMock},
        
        HttpClient
      ]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(LoginComponent);

      component = fixture.componentInstance;
    
      fixture.detectChanges();
    });
    
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);

  //   component = fixture.componentInstance;
    
  //   fixture.detectChanges();
  // });

  

  // it(`should have as title 'false'`, async(() => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.isLoggedin).toEqual(false);
  // }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isloggedIn true ?',()=>{
    expect(component.isLoggedin).toBeFalsy();
  });

  it('Should Authenticate',()=>{expect(component.authenticate).toBeTruthy();});

  // it('Should Authenticate the user "true"',()=>{
  //   expect(component.authenticate(false)).toBeTruthy();
  // });
  // it(`should issue a request`,
  //   // 1. declare as async test since the HttpClient works with Observables
  //   async(
  //     // 2. inject HttpClient and HttpTestingController into the test
  //     inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
  //       // 3. send a simple request
  //       http.get('/foo/bar').subscribe();

  //       // 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
  //       // here two, it's significantly less boilerplate code needed to verify an expected request
  //       backend.expectOne({
  //         url: '/foo/bar',
  //         method: 'GET'
  //       });
  //     })
  //   )
  // );
});
