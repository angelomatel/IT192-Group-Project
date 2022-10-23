import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dog } from '../../model/dog';
import { DogService } from '../../service/dog.service';

@Component({
  selector: 'app-dog-info',
  templateUrl: './dog-info.component.html',
  styleUrls: ['./dog-info.component.css'],
})
export class DogInfoComponent implements OnInit {
  public dog_id: string = '';
  public dog: Dog = new Dog();

  constructor(route: ActivatedRoute, private dogService: DogService) {
    route.params.subscribe((params) => {
      this.dog_id = params['id'];
    });
    this.dogService.getDog(parseInt(this.dog_id)).subscribe((dog) => {
      this.dog = dog;
    });
  }

  ngOnInit(): void {}
}
