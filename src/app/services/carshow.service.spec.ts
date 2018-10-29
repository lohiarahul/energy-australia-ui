import { TestBed } from '@angular/core/testing';

import { CarshowService } from './carshow.service';

describe('CarshowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarshowService = TestBed.get(CarshowService);
    expect(service).toBeTruthy();
  });
});
