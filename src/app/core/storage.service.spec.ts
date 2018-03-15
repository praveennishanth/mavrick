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

  it('should be call setString', inject([StorageService], (service: StorageService) => {
    expect(service.setString("test1","value")).toBe(undefined);
  }));
 

  it('should be call getString', inject([StorageService], (service: StorageService) => {
    expect(service.getString("test1")).toBe("value");
  }));
 

  it('should be call delete', inject([StorageService], (service: StorageService) => {
    expect(service.delete("test")).toBe(undefined);
  }));
  
  it('should be call clear', inject([StorageService], (service: StorageService) => {
    expect(service.clear()).toBe(undefined);
  }));

});
