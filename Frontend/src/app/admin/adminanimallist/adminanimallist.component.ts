import { Component, OnInit } from '@angular/core';
import { Dog } from 'app/model/dog';
import { DogService } from 'app/service/dog.service';

@Component({
  selector: 'app-adminanimallist',
  templateUrl: './adminanimallist.component.html',
  styleUrls: ['./adminanimallist.component.css'],
})
export class AdminAnimalListComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((dogs) => {
      this.dogs = dogs;
    });
  }
}
