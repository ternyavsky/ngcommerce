import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalebarComponent } from './salebar.component';

describe('SalebarComponent', () => {
  let component: SalebarComponent;
  let fixture: ComponentFixture<SalebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
