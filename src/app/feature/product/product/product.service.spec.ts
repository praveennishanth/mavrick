import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import { CoreService } from '../../../core/core.service'
import { HttpClientModule,HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, CoreService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
