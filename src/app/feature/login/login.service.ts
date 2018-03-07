import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { CoreModule } from '../../core/core.module';
import { CoreService } from '../../core/core.service'
import { StorageService } from '../../core/storage.service'

@Injectable()
export class LoginService {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coreService: CoreService,
    private storageService: StorageService
  ) { }

  private isLoggedin: boolean;
  authenticate(data) {
    //Authenticate and redirect
    this.isLoggedin = this.coreService.authenticate(data);
    this.storageService.setString("isLoggedIn", this.isLoggedin)
    this.isLoggedin ? this.signIn() : this.invalidUser;

  }

  signIn() {
    this.router.navigate(['/home']);
  }
  invalidUser() {
    alert("Invalid User");
  }

}
