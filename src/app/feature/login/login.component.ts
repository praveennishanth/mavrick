import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService 
  ) {
    //loginService.auth = this.authenticate.bind(this);
  }

  ngOnInit() {
  }

  signIn(){
      this.router.navigate(['/home']);
  }
  

  authenticate(data){
    this.loginValue=data;
    console.log(this.loginValue);
    //this.isLoggedin = this.loginService.auth(data);
    
  }
  
}
