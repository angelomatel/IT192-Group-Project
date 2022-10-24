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

  deleteDog(id: Number): void {
    this.dogService.deleteDog(id).subscribe((dog) => {
      console.log(`Successfully deleted dog with id ${id}`);
      console.log(dog);
    });
  }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((dogs) => {
      this.dogs = dogs;
    });
  }
}
