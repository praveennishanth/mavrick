import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { CoreService } from './core.service'
import { GuardService } from './guard.service'
import { StorageService} from './storage.service'



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  
})
export class CoreModule {

  public static forRoot():ModuleWithProviders{
    return {
      ngModule:CoreModule,
      providers: [
        CoreService, 
        GuardService, 
        StorageService
      ]}
  }
 }
