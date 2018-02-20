import { TestBed, inject } from '@angular/core/testing';

import { StudetailService } from './studetail.service';

describe('StudetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudetailService]
    });
  });

  it('should be created', inject([StudetailService], (service: StudetailService) => {
    expect(service).toBeTruthy();
  }));
});
