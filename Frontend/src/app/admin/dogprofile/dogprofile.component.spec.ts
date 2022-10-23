import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogprofileComponent } from './dogprofile.component';

describe('DogprofileComponent', () => {
  let component: DogprofileComponent;
  let fixture: ComponentFixture<DogprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
