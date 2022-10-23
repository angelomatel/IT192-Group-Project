import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCountryComponent } from './show-country/show-country.component';
import { ShowCountriesComponent } from './show-countries/show-countries.component';

import { HomepageComponent } from './user/homepage/homepage.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { AdoptionpageComponent } from './user/adoptionpage/adoptionpage.component';
import { AdoptionformComponent } from './user/adoptionform/adoptionform.component';
import { DogInfoComponent } from './user/dog-info/dog-info.component';

import { AdminLoginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminAdoptionRequestComponent } from './admin/adminadoptionrequest/adminadoptionrequest.component';
import { AdminImportComponent } from './admin/adminimport/adminimport.component';
import { AdminAnimalListComponent } from './admin/adminanimallist/adminanimallist.component'; 
import { DogProfileComponent } from './admin/dogprofile/dogprofile.component';

const routes: Routes = [
  // User Paths
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'adoptionpage', component: AdoptionpageComponent },
  { path: 'adoptionform', component: AdoptionformComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'dog-info/:id', component: DogInfoComponent },

  // Admin Paths
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/adoptionrequest', component: AdminAdoptionRequestComponent },
  { path: 'admin/import', component: AdminImportComponent },
  { path: 'admin/dogs', component: AdminAnimalListComponent },
  { path: 'admin/dogprofile/:id', component: DogProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
