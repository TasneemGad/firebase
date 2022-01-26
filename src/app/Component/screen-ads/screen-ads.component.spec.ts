import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAdsComponent } from './screen-ads.component';

describe('ScreenAdsComponent', () => {
  let component: ScreenAdsComponent;
  let fixture: ComponentFixture<ScreenAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
