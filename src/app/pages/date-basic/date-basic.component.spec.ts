import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateBasicComponent } from './date-basic.component';

describe('DateBasicComponent', () => {
  let component: DateBasicComponent;
  let fixture: ComponentFixture<DateBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
