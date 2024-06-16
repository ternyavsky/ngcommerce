import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineBtnComponent } from './outline-btn.component';

describe('OutlineBtnComponent', () => {
  let component: OutlineBtnComponent;
  let fixture: ComponentFixture<OutlineBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlineBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlineBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
