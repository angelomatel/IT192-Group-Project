import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImportComponent } from './adminimport.component';

describe('AdminimportComponent', () => {
  let component: AdminImportComponent;
  let fixture: ComponentFixture<AdminImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
