import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogProfileComponent } from './dogprofile.component';

describe('DogprofileComponent', () => {
  let component: DogProfileComponent;
  let fixture: ComponentFixture<DogProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
