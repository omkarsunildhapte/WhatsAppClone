import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneErrorComponent } from './phone-error.component';

describe('PhoneErrorComponent', () => {
  let component: PhoneErrorComponent;
  let fixture: ComponentFixture<PhoneErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
