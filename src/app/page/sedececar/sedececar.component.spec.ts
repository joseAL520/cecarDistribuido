import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedececarComponent } from './sedececar.component';

describe('SedececarComponent', () => {
  let component: SedececarComponent;
  let fixture: ComponentFixture<SedececarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedececarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedececarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
