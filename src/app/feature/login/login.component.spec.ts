import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule,HttpClient, HttpHandler } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component'
import { LoginService } from './login.service'
import { CoreService } from '../../core/core.service'
import { StorageService } from '../../core/storage.service'
import { RouterTestingModule } from '@angular/router/testing'
import { LocationStrategy } from '@angular/common';


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
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        RouterModule,
        HttpClientModule
      ],
      declarations: [ LoginComponent, LoginFormComponent ],
      providers:[
        LoginService,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: Router, useClass: MockRouter},
        CoreService,
        HttpClient,
        StorageService,
        LocationStrategy
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it(`should have as title 'false'`, async(() => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.isLoggedin).toEqual(false);
  // }));
});
