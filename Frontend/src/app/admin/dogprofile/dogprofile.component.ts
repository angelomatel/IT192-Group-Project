import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Dog } from 'app/model/dog';
import { DogService } from 'app/service/dog.service';

@Component({
  selector: 'app-dogprofile',
  templateUrl: './dogprofile.component.html',
  styleUrls: ['./dogprofile.component.css'],
})
export class DogProfileComponent implements OnInit {
  public dog_id: string = '';
  public dog: Dog = new Dog();

  adminDogUpdateForm = this.formBuilder.group(this.dog);

  constructor(
    route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dogService: DogService
  ) {
    route.params.subscribe((params) => {
      this.dog_id = params['id'];
    });
    this.dogService.getDog(parseInt(this.dog_id)).subscribe((dog) => {
      this.dog = dog;
      this.adminDogUpdateForm = this.formBuilder.group(this.dog);
    });
  }
  ngOnInit(): void {
  }

  cancel(): void {
    window.history.back();
  }

  onSubmit(): void {
    Object.assign(this.dog, this.adminDogUpdateForm.value);

    this.dogService.updateDog(parseInt(this.dog_id), this.dog).subscribe((dog) => {
      console.log(dog);
    })
  }
}
