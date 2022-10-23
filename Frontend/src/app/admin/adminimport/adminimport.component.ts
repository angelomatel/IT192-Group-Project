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
    images: Blob,
    story: '',
  })

  constructor(
    private formBuilder: FormBuilder,
    private dogService: DogService,
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      this.adminDogImportForm.value.images = file;
      console.log(file)
    }
  }

  onSubmit(): void {
    console.log(this.adminDogImportForm.value); 
    Object.assign(this.dog, this.adminDogImportForm.value);
    console.log(this.adminDogImportForm.value);

    this.dogService.getDogs().subscribe(dogs => {
      this.dog.setId(dogs.length + 1);
    });
    
    this.dogService.addDog(this.dog).subscribe((dog) => {
      console.log(dog);
    })
  }

}
