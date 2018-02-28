import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  private router: any;
  constructor(private _router:Router){
    this.router=_router;
    console.log(this.router.url)
  }
  ngOnInit(){

  }
}
