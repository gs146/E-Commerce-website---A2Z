import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTemComponent } from './add-tem.component';

describe('AddTemComponent', () => {
  let component: AddTemComponent;
  let fixture: ComponentFixture<AddTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
