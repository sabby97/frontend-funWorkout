import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusedMvpComponent } from './focused-mvp.component';

describe('FocusedMvpComponent', () => {
  let component: FocusedMvpComponent;
  let fixture: ComponentFixture<FocusedMvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusedMvpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusedMvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
