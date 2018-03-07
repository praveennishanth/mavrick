import { Injectable } from '@angular/core';
import { StorageService } from './storage.service'

@Injectable()
export class GuardService {

  constructor(
    public storage: StorageService) { }
  canActivate(): boolean {
    if (!this.isLoggedIn()) {
      return false;
    }
    return true;
  }

  isLoggedIn() {
    return this.storage.getString("isLoggedIn");
  }
}
