import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoggedin: any;
  public loginValue: any;
  constructor(
    private loginService: LoginService
  ) {
    //loginService.auth = this.authenticate.bind(this);
  }

  ngOnInit() {
    this.isLoggedin = false;
  }


  authenticate(data) {
    this.isLoggedin = this.loginService.authenticate(data);
    
  }

}
