import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosalComponent } from './carrosal.component';

describe('CarrosalComponent', () => {
  let component: CarrosalComponent;
  let fixture: ComponentFixture<CarrosalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
