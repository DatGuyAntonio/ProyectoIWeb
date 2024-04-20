import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensjaesComponent } from './mensjaes.component';

describe('MensjaesComponent', () => {
  let component: MensjaesComponent;
  let fixture: ComponentFixture<MensjaesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensjaesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensjaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
