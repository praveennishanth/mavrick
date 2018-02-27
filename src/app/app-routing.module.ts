import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { FeatureModule } from './feature/feature.module';
import { FeatureComponent } from './feature/feature.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: FeatureComponent },
  { path: '**', component: LoginComponent}//PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    LoginModule,
    FeatureModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
