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
  adopters: Adoption[] = [];
  dogsObj: any = {};

  constructor(
    private adoptionService: AdoptionService,
    private dogService: DogService
  ) {}

  deleteAdoption(id: number) {
    alert(`Request deleted!`);
    this.adoptionService.deleteAdoption(id).subscribe((data) => {
      console.log(data);
      location.reload();
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
      this.adopters = adoptions;
    });

    this.dogService.getDogs().subscribe((dogs) => {
      for (let dog of dogs) {
        Object.assign(this.dogsObj, { [dog.id]: dog });
      }
      console.log(this.dogsObj)
    });
  }
}
