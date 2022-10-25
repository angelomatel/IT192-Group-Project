import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Dog } from 'app/model/dog';
import { DogService } from 'app/service/dog.service';

import { Adoption } from 'app/model/adoption';
import { AdoptionService } from 'app/service/adoption.service';

@Component({
  selector: 'app-adoptionform',
  templateUrl: './adoptionform.component.html',
  styleUrls: ['./adoptionform.component.css']
})
export class AdoptionformComponent implements OnInit {

  dogs: Dog[] = [];

  adoptionForm = this.formBuilder.group({
    first_name: '',
    middle_name: '',
    last_name: '',
    suffix: '',

    contact_number: '',
    email: '',
    address: '',

    selected_pet: 0,
    adoption_reason: '',
  })

  constructor(
    private formBuilder: FormBuilder,
    private dogService: DogService,
    private adoptionService: AdoptionService
  ) { }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((dogs) => {
      this.dogs = dogs;
    });
  }

  onSubmit(): void {
    let {
      first_name, middle_name, last_name, suffix,
      contact_number, email, address,
      selected_pet, adoption_reason
    } = this.adoptionForm.value;

    let adoption = new Adoption({
      adopter_name: `${[first_name, middle_name, last_name, suffix].filter(Boolean).join(' ')}`,
      adopter_contact: contact_number,
      adopter_email: email,
      adopter_address: address,

      dog_id: selected_pet,
    });

    this.adoptionService.addAdoption(adoption).subscribe((adoption) => {
      console.log(adoption);
    });

    alert("Submitted!")
    this.adoptionForm.reset();
  }

}
