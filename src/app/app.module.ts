import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { FeatureRoutingModule } from './feature/feature-routing.module'
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import the feature module here so you can add it to the imports array below


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    SharedModule,
    AppRoutingModule,
    CoreModule.forRoot()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
