import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdoptionRequestComponent } from './adminadoptionrequest.component';

describe('AdminadoptionrequestComponent', () => {
  let component: AdminAdoptionRequestComponent;
  let fixture: ComponentFixture<AdminAdoptionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdoptionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAdoptionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
