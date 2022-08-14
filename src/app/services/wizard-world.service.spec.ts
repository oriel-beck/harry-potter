import { TestBed } from '@angular/core/testing';

import { WizardWorldService } from './wizard-world.service';

describe('WizardWorldService', () => {
  let service: WizardWorldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizardWorldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
