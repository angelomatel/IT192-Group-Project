import { Component, OnInit } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from 'app/components/footer/footer.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
