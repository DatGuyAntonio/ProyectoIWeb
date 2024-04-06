import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasNocheComponent } from './mesas-noche.component';

describe('MesasNocheComponent', () => {
  let component: MesasNocheComponent;
  let fixture: ComponentFixture<MesasNocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesasNocheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesasNocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
