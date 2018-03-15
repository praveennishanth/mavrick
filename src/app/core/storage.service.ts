import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  setString(key, value){
    localStorage.setItem(key, value);
  }
  getString(key){
    return localStorage.getItem(key);
  }
  delete(key){
    localStorage.removeItem(key);
  }
  clear(){
    localStorage.clear();
  }
 
}

