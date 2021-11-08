import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusedMVPComponent } from './focused-mvp.component';

describe('FocusedMVPComponent', () => {
  let component: FocusedMVPComponent;
  let fixture: ComponentFixture<FocusedMVPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusedMVPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusedMVPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
