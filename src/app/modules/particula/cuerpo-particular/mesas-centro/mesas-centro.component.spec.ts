import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasCentroComponent } from './mesas-centro.component';

describe('MesasCentroComponent', () => {
  let component: MesasCentroComponent;
  let fixture: ComponentFixture<MesasCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesasCentroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesasCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
