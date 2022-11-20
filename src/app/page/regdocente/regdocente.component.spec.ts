import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdocenteComponent } from './regdocente.component';

describe('RegdocenteComponent', () => {
  let component: RegdocenteComponent;
  let fixture: ComponentFixture<RegdocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegdocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegdocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
