import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceOfIncomeComponent } from './source-of-income.component';

describe('SourceOfIncomeComponent', () => {
  let component: SourceOfIncomeComponent;
  let fixture: ComponentFixture<SourceOfIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceOfIncomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceOfIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
