import { TestBed } from '@angular/core/testing';

import { ScreenAdsService } from './screen-ads.service';

describe('ScreenAdsService', () => {
  let service: ScreenAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
