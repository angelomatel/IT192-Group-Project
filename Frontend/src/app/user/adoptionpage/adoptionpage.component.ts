import { Component, OnInit } from '@angular/core';

import { Dog } from '../../model/dog';
import { DogService } from '../../service/dog.service';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-adoptionpage',
  templateUrl: './adoptionpage.component.html',
  styleUrls: ['./adoptionpage.component.css'],
})
export class AdoptionpageComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((dogs) => {
      this.dogs = dogs;
    });
  }
}
