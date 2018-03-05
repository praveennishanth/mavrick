import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { CoreService } from '../../core/core.service'
import { CoreModule } from '../../core/core.module';

@Injectable()
export class LoginService {
  constructor(private route: ActivatedRoute,
    private router: Router,
    private coreService: CoreService) { }
    private isLoggedin: boolean;
  authenticate(data) {
    //Authenticate and redirect
    this.isLoggedin = this.coreService.authenticate(data);
    this.isLoggedin ? this.signIn() : this.invalidUser;

  }

  signIn() {
    this.router.navigate(['/home']);
  }
   invalidUser(){
     console.log("Invalid User",this.isLoggedin);
   }

}
