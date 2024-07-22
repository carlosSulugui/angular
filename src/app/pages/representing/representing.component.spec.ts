import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentingComponent } from './representing.component';

describe('RepresentingComponent', () => {
  let component: RepresentingComponent;
  let fixture: ComponentFixture<RepresentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepresentingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepresentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
