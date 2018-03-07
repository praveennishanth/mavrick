import { Injectable } from '@angular/core';

@Injectable()
export class CoreServiceMock {
  constructor() { }

  getUserDetails(): Array<{}> {
      return [
          {
              id: '1',
              name: 'John',
              email:"john@doe.com",
              city:'London'
          },
          {
            id: '2',
            name: 'Doe',
            email:"doe@john.com",
            city:'Las Vegas'
        }
      ];
  }
  authenticate(credentials){
    return true
  }
}