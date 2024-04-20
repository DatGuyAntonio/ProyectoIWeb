import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillasComponent } from './sillas.component';

describe('SillasComponent', () => {
  let component: SillasComponent;
  let fixture: ComponentFixture<SillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SillasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
