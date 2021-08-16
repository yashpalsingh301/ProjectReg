import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingTableComponent } from './bidding-table.component';

describe('BiddingTableComponent', () => {
  let component: BiddingTableComponent;
  let fixture: ComponentFixture<BiddingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
