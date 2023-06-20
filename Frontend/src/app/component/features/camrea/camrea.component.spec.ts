import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamreaComponent } from './camrea.component';

describe('CamreaComponent', () => {
  let component: CamreaComponent;
  let fixture: ComponentFixture<CamreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
