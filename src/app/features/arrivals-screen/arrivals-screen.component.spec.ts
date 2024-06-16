import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalsScreenComponent } from './arrivals-screen.component';

describe('ArrivalsScreenComponent', () => {
  let component: ArrivalsScreenComponent;
  let fixture: ComponentFixture<ArrivalsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrivalsScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
