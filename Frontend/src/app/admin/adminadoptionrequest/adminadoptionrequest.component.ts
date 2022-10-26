import { Component, OnInit } from '@angular/core';

import { Adoption } from 'app/model/adoption';
import { Dog } from 'app/model/dog';
import { DogService } from 'app/service/dog.service';
import { AdoptionService } from 'app/service/adoption.service';

@Component({
  selector: 'app-adminadoptionrequest',
  templateUrl: './adminadoptionrequest.component.html',
  styleUrls: ['./adminadoptionrequest.component.css'],
})
export class AdminAdoptionRequestComponent implements OnInit {
  adopters = [
    {
      adopter_address: '',
      adopter_contact: '',
      adopter_email: '',
      adopter_name: '',
      adoption_id: 0,
      dog_name: '',
      dog_img: '',
      dog_age: '',
      status: '',
      adopter_reason: '',
    },
  ];

  constructor(
    private adoptionService: AdoptionService,
    private dogService: DogService
  ) {}

  deleteAdoption(id: number) {
    alert(`Are you sure you want to delete ${id} request?`);
    return;
    this.adoptionService.deleteAdoption(id).subscribe((data) => {
      console.log(data);
    });
  }

  updateAdoption(id: number, adoption: Adoption) {
    this.adoptionService.updateAdoption(id, adoption).subscribe(() => {
      alert(`Successfully updated adoption!`);
    });
  }

  acceptAdoption(adoption: Adoption) {
    adoption.status = 'accepted';
    this.updateAdoption(adoption.adoption_id, adoption);

    this.dogService.getDog(adoption.dog_id).subscribe((dog) => {
      dog.hasOwner = true;
      this.dogService.updateDog(adoption.dog_id, dog).subscribe(() => {
        alert(`Successfully updated dog!`);
      });
    })
  }

  rejectAdoption(adoption: Adoption) {
    adoption.status = 'rejected';
    this.updateAdoption(adoption.adoption_id, adoption);
  }

  ngOnInit(): void {
    this.adoptionService.getAdoptions().subscribe((adoptions) => {
      adoptions.forEach((adoption) => {
        this.dogService.getDog(adoption.dog_id).subscribe((dog) => {
          this.adopters[adoption.adoption_id] = {
            adopter_address: adoption.adopter_address,
            adopter_contact: adoption.adopter_contact,
            adopter_email: adoption.adopter_email,
            adopter_name: adoption.adopter_name,
            adoption_id: adoption.adoption_id,
            dog_name: dog.name,
            dog_img: dog.images,
            dog_age: dog.age,
            status: adoption.status,
            adopter_reason: adoption.adopter_reason,
          };
        });
      });
    });
  }
}
