import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureRoutingModule } from './feature-routing.module';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module'
import { ProductModule } from './product/product.module';
import { RegisterModule } from './register/register.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule,
    HomeModule,
    LoginModule,
    ProductModule,
    RegisterModule,
  ],
  declarations: [],
  exports: []
})
export class FeatureModule { }
