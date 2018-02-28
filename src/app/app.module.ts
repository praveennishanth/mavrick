import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FeatureRoutingModule } from './feature/feature-routing.module'
import { FeatureModule } from './feature/feature.module';

import { AppComponent } from './app.component';

// import the feature module here so you can add it to the imports array below


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    FeatureRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
