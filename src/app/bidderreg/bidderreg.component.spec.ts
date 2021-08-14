import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderregComponent } from './bidderreg.component';

describe('BidderregComponent', () => {
  let component: BidderregComponent;
  let fixture: ComponentFixture<BidderregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
