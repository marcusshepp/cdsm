import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainsComponent } from './gains.component';

describe('GainsComponent', () => {
  let component: GainsComponent;
  let fixture: ComponentFixture<GainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
