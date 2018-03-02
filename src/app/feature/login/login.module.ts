import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, LoginFormComponent],
  exports: [
  LoginComponent
]
})
export class LoginModule { }
