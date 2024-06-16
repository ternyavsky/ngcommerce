import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBtnComponent } from './black-btn.component';

describe('BlackBtnComponent', () => {
  let component: BlackBtnComponent;
  let fixture: ComponentFixture<BlackBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
