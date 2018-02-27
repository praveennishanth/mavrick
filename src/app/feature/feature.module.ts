import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';

import { SharedModule } from './shared/shared.module';
import { FooterComponent} from './shared/footer/footer.component';
import { HeaderComponent} from './shared/header/header.component';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';

import { ProductModule } from './product/product.module';
import { ProductComponent } from './product/product/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FeatureComponent, 
    HeaderComponent, 
    FooterComponent,
    HomeComponent,
    ProductComponent
  ],
  exports: [
    FeatureComponent
  ]
})
export class FeatureModule { }
