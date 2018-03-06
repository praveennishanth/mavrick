import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService} from './login.service'
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent, 
    LoginFormComponent
  ],
  providers:[LoginService],
  exports: [LoginComponent]
})
export class LoginModule { }
