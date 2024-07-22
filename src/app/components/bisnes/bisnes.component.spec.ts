import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisnesComponent } from './bisnes.component';

describe('BisnesComponent', () => {
  let component: BisnesComponent;
  let fixture: ComponentFixture<BisnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BisnesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BisnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
