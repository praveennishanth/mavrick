import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent}//PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
