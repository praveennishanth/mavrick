import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private userDetail: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.initializeUserData();

  }

  initializeUserData() {
    this.productService.setUserDetails().subscribe(data => {
      this.userDetail = data;
      console.log(data);
    });
  }

}
