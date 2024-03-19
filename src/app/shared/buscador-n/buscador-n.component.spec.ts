import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorNComponent } from './buscador-n.component';

describe('BuscadorNComponent', () => {
  let component: BuscadorNComponent;
  let fixture: ComponentFixture<BuscadorNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscadorNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscadorNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
