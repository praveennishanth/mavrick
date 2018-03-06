import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { StorageService } from './storage.service'
import { Router } from '@angular/router';

@Injectable()
export class GuardService {

  constructor(
    public coreService: CoreService,
    public router: Router,
    public storage: StorageService) { }
  canActivate(): boolean {
    if (!this.isLoggedIn()) {
      // this.router.navigate(['login']);
      console.log("Inside")
      return false;
    }
    return true;
  }

  isLoggedIn() {
    return this.storage.getString("isLoggedIn");
  }
}
