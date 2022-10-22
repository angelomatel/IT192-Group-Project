import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminanimallistComponent } from './adminanimallist.component';

describe('AdminanimallistComponent', () => {
  let component: AdminanimallistComponent;
  let fixture: ComponentFixture<AdminanimallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminanimallistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminanimallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
