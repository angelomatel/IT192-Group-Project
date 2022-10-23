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
  { path: '', redirectTo: '/adoptionpage', pathMatch: 'full' },
  { path: 'adoptionpage', component: AdoptionpageComponent },
  { path: '', redirectTo: '/adoptionform', pathMatch: 'full' },
  { path: 'adoptionform', component: AdoptionformComponent },
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: '', redirectTo: '/dog-info/:id', pathMatch: 'full' },
  { path: 'dog-info/:id', component: DogInfoComponent },

  // Admin Paths
  { path: '', redirectTo: '/admin/adminlogin', pathMatch: 'full' },
  { path: 'admin/adminlogin', component: AdminLoginComponent },
  { path: '', redirectTo: '/admin/adminadoptionrequest', pathMatch: 'full' },
  {
    path: 'admin/adminadoptionrequest',
    component: AdminAdoptionRequestComponent,
  },
  { path: '', redirectTo: '/admin/adminimport', pathMatch: 'full' },
  { path: 'admin/adminimport', component: AdminImportComponent },
  { path: '', redirectTo: '/admin/dogs', pathMatch: 'full' },
  { path: 'admin/dogs', component: AdminAnimalListComponent },
  { path: '', redirectTo: '/admin/dogprofile/:id', pathMatch: 'full' },
  { path: 'admin/dogprofile/:id', component: DogProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
