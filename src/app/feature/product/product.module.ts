import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module'
import { CoreService } from '../../core/core.service'
import { ProductService } from './product/product.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  providers: [ProductService, CoreService],
  declarations: [ProductComponent]
})
export class ProductModule { }
