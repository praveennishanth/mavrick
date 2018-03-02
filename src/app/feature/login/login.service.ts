import { Injectable } from '@angular/core';
import { CoreService } from '../../core/core.service'
import { CoreModule } from '../../core/core.module';

@Injectable()
export class LoginService {
  constructor(private coreService: CoreService ) { }

  auth(data:any){
    return this.coreService.authenticate(data);
  }
}
