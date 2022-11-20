import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstudenComponent } from './regstuden.component';

describe('RegstudenComponent', () => {
  let component: RegstudenComponent;
  let fixture: ComponentFixture<RegstudenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegstudenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegstudenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
