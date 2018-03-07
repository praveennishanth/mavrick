import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By} from '@angular/platform-browser'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let de: DebugElement;
  let el: HTMLElement; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        LoginFormComponent,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    
    component = fixture.componentInstance;
    
    de = fixture.debugElement.query(By.css("form"));
    el = de.nativeElement;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it ('should call the ngOnInit method', async(()=>{
    expect(component.ngOnInit).toBeTruthy();
  }));

  it ('should call the onSubmit method', async(()=>{
    expect(component.onSubmit).toBeTruthy();
  }));

  // it(`form should be invalid`, async(() => {
  //   component.loginForm.controls['username'].setValue('');
  //   component.loginForm.controls['password'].setValue('');
  //   expect(component.loginForm.valid).toBeTruthy();
  // }));

  // it(`form should be valid`, async(() => {
  //   component.loginForm.controls['username'].setValue('asd@asd.com');
  //   component.loginForm.controls['password'].setValue('aada');
  //   expect(component.loginForm.valid).toBeFalsy();
  // }));

  
});
