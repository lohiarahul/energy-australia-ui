import { TestBed } from '@angular/core/testing';

import { EnvConfigurationService } from './env-configuration.service';

describe('EnvConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvConfigurationService = TestBed.get(EnvConfigurationService);
    expect(service).toBeTruthy();
  });
});
