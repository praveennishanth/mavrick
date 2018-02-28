import { Injectable } from '@angular/core';
import { CoreService } from '../../../core/core.service'

@Injectable()
export class ProductService {

  constructor(private coreService:CoreService) { }

  private userDetails : any = {};

 setUserDetails() {
    return this.coreService.getUserDetails();
  }
  

}
