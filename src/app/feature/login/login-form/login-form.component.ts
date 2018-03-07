import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  credentials = {
    username:'',
    password:''
  }

  @Output()event:EventEmitter<object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(this.credentials.username, [
        Validators.required,
        Validators.minLength(4)
    ]),
      'password': new FormControl(this.credentials.password, [
        Validators.required,
        Validators.minLength(4)
      ])
    });

    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && (control.dirty || control.touched || !control.pristine) && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  //Validation
  formErrors = {
    'username': '',
    'password': ''
  };
  validationMessages = {
    'username': {
      'required': "Username is required!",
      'minlength': 'Minimum 4 Char is required'
    },
    'password': {
      'required': 'Password is required!',
      'minlength': 'Minimum 4 Char is required'

    },
  };

  onSubmit(){
    this.event.emit(this.loginForm.value);
  }
}
