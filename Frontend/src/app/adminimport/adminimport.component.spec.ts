import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminimportComponent } from './adminimport.component';

describe('AdminimportComponent', () => {
  let component: AdminimportComponent;
  let fixture: ComponentFixture<AdminimportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminimportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
