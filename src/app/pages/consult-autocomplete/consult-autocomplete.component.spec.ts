import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultAutocompleteComponent } from './consult-autocomplete.component';

describe('ConsultAutocompleteComponent', () => {
  let component: ConsultAutocompleteComponent;
  let fixture: ComponentFixture<ConsultAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
