import { TestBed, inject } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
  });

  it('should be created', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should be call getObject', inject([StorageService], (service: StorageService) => {
    expect(service.getObject).toBeTruthy();
  }));

  it('should be call getString', inject([StorageService], (service: StorageService) => {
    expect(service.getString).toBeTruthy();
  }));

  it('should be call setObject', inject([StorageService], (service: StorageService) => {
    expect(service.setObject).toBeTruthy();
  }));

  it('should be call setString', inject([StorageService], (service: StorageService) => {
    expect(service.setString).toBeTruthy();
  }));

  it('should be call clear', inject([StorageService], (service: StorageService) => {
    expect(service.clear).toBeTruthy();
  }));

  it('should be call delete', inject([StorageService], (service: StorageService) => {
    expect(service.delete).toBeTruthy();
  }));
});
