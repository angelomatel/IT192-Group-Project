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

  deleteDog(id: number): void {
    this.dogService.deleteDog(id).subscribe(() => {
      console.log(`Successfully deleted dog with id ${id}`);

      alert(`Successfully deleted dog with id ${id}`);
      location.reload();
    });
  }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((dogs) => {
      this.dogs = dogs;
    });
  }
}
