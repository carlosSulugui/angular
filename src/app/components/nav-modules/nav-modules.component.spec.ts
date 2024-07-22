import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavModulesComponent } from './nav-modules.component';

describe('NavModulesComponent', () => {
  let component: NavModulesComponent;
  let fixture: ComponentFixture<NavModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
