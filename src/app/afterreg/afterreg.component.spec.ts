import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterregComponent } from './afterreg.component';

describe('AfterregComponent', () => {
  let component: AfterregComponent;
  let fixture: ComponentFixture<AfterregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
