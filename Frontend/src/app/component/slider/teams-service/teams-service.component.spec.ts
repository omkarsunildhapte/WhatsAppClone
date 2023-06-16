import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsServiceComponent } from './teams-service.component';

describe('TeamsServiceComponent', () => {
  let component: TeamsServiceComponent;
  let fixture: ComponentFixture<TeamsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
