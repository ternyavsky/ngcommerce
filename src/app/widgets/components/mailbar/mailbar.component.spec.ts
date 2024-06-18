import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailbarComponent } from './mailbar.component';

describe('MailbarComponent', () => {
  let component: MailbarComponent;
  let fixture: ComponentFixture<MailbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
