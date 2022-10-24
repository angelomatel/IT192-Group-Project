import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Dog } from 'app/model/dog';
import { DogService } from '../../service/dog.service';

@Component({
  selector: 'app-adminimport',
  templateUrl: './adminimport.component.html',
  styleUrls: ['./adminimport.component.css']
})
export class AdminImportComponent implements OnInit {

  dog = new Dog();

  adminDogImportForm = this.formBuilder.group({
    name: '',
    gender: '',
    age: '',
    size: '',
    color: '',
    adjectives: '',
    images: '',
    story: '',
  })

  constructor(
    private formBuilder: FormBuilder,
    private dogService: DogService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    Object.assign(this.dog, this.adminDogImportForm.value);
    
    this.dogService.addDog(this.dog).subscribe((dog) => {
      console.log(dog);
    })
  }

}
