import { TestBed } from '@angular/core/testing';

import { OButtonService } from './o-button.service';

describe('OButtonService', () => {
  let service: OButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
