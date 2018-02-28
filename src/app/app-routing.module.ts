import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './feature/login/login.module';
import { LoginComponent } from './feature/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent}//PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    LoginModule,
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
