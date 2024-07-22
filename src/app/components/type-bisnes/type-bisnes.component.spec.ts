import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBisnesComponent } from './type-bisnes.component';

describe('TypeBisnesComponent', () => {
  let component: TypeBisnesComponent;
  let fixture: ComponentFixture<TypeBisnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeBisnesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeBisnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
