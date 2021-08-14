import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbidderComponent } from './loginbidder.component';

describe('LoginbidderComponent', () => {
  let component: LoginbidderComponent;
  let fixture: ComponentFixture<LoginbidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbidderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginbidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
