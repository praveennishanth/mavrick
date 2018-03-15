import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By} from '@angular/platform-browser'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { FormBuilder } from '@angular/forms';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let spy:any;
 

  beforeEach(async(() => {    
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        LoginFormComponent,
       ],
       providers:[FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it ('should call the ngOnInit method', async(()=>{
    expect(component.ngOnInit).toBeTruthy();
  }));

  it ('should call the onSubmit method', async(()=>{
    expect(component.onSubmit()).toBe(undefined);
  }));

  it(`form should be invalid`, async(() => {
    component.loginForm.controls['username'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    // expect(component.loginForm.invalid).toBeFalsy();
    component.loginForm.controls['username'].setValue('asd@asd.com');
    component.loginForm.controls['password'].setValue('aada');
    expect(component.loginForm.valid).toBeTruthy();
  }));

  it(`onValueChanged should be invalid`, async(() => {
    spy = spyOn(component,"loginForm").and.returnValue(undefined);
    expect(component.onValueChanged()).Any;
  }));

  it(`onValueChanged should be valid`, async(() => {
    // expect(component.loginForm.invalid).toBeFalsy();
    component.loginForm.controls['username'].setValue('asd@asd.com');
    component.loginForm.controls['password'].setValue('aada');
    expect(component.onValueChanged()).Any;
  }));
  
});
