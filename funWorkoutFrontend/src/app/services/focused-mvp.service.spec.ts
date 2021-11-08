import { TestBed } from '@angular/core/testing';

import { FocusedMVPService } from './focused-mvp.service';

describe('FocusedMVPService', () => {
  let service: FocusedMVPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusedMVPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
