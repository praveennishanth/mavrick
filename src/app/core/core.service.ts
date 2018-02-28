import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CoreService {

  constructor(private http: HttpClient) { }

  private configUrl = "https://jsonplaceholder.typicode.com/users";

  private headers: any = {};

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUserDetails() {
    // this.setHeader('content-type', 'application/json; charset=utf-8')
    return this.http.get(this.configUrl, this.httpOptions);
  }

}
