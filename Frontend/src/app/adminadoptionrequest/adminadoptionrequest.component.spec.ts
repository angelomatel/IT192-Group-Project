import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadoptionrequestComponent } from './adminadoptionrequest.component';

describe('AdminadoptionrequestComponent', () => {
  let component: AdminadoptionrequestComponent;
  let fixture: ComponentFixture<AdminadoptionrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminadoptionrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminadoptionrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
