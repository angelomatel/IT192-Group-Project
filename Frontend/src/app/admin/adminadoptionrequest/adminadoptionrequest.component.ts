import { Component, OnInit } from '@angular/core';

import { Adoption } from 'app/model/adoption';
import { AdoptionService } from 'app/service/adoption.service';

@Component({
  selector: 'app-adminadoptionrequest',
  templateUrl: './adminadoptionrequest.component.html',
  styleUrls: ['./adminadoptionrequest.component.css']
})
export class AdminAdoptionRequestComponent implements OnInit {
  adopters: Adoption[] = [];

  constructor(
    private adoptionService: AdoptionService,
  ) {}

  ngOnInit(): void {
    this.adoptionService.getAdoptions().subscribe((adoptions) => {
      this.adopters = adoptions;
      console.log(adoptions)
    });
  }

}
