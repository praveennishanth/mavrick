import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component'

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';

import { ProductModule } from './product/product.module';
import { ProductComponent } from './product/product/product.component';

import { FeatureRoutingModule } from './feature-routing.module'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductComponent
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    SidebarComponent, 
    HomeComponent,
    ProductComponent
  ]
})
export class FeatureModule { }
