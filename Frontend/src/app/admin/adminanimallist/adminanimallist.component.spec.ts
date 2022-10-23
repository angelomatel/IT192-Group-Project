import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnimalListComponent } from './adminanimallist.component';

describe('AdminanimallistComponent', () => {
  let component: AdminAnimalListComponent;
  let fixture: ComponentFixture<AdminAnimalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnimalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
