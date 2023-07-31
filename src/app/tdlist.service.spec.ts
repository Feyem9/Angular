import { TestBed } from '@angular/core/testing';

import { TdlistService } from './tdlist.service';

describe('TdlistService', () => {
  let service: TdlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TdlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
