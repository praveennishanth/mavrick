import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './product/product.service'

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ProductService],
  declarations: [ProductComponent]
})
export class ProductModule { 
  public static forRoot():ModuleWithProviders{
    return {
      ngModule:ProductModule,
      providers: [
        ProductService
      ]}
  }
}
