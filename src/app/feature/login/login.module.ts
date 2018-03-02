import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService} from './login.service'
import { LoginFormComponent } from './login-form/login-form.component';
import { CoreService } from '../../core/core.service'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, LoginFormComponent],
  providers:[LoginService, CoreService],
  exports: [
  LoginComponent
]
})
export class LoginModule { }
