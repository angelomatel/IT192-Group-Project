import { Component, OnInit } from '@angular/core';
import { Dog } from 'app/model/dog';
import { DogService } from 'app/service/dog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dogprofile',
  templateUrl: './dogprofile.component.html',
  styleUrls: ['./dogprofile.component.css'],
})
export class DogprofileComponent implements OnInit {
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
