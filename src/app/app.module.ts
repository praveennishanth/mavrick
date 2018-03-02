import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { FeatureRoutingModule } from './feature/feature-routing.module'
import { FeatureModule } from './feature/feature.module';

import { AppComponent } from './app.component';
import { ProductService } from './feature/product/product/product.service'
import { CoreService } from './core/core.service'
// import the feature module here so you can add it to the imports array below


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FeatureModule,
    FeatureRoutingModule,
    AppRoutingModule
    
  ],
  providers: [ProductService, CoreService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
