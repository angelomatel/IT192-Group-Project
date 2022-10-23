import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCountryComponent } from './show-country/show-country.component';
import { ShowCountriesComponent } from './show-countries/show-countries.component';

import { HomepageComponent } from './user/homepage/homepage.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { AdoptionpageComponent } from './user/adoptionpage/adoptionpage.component';
import { AdoptionformComponent } from './user/adoptionform/adoptionform.component';
import { DogInfoComponent } from './user/dog-info/dog-info.component';

import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminadoptionrequestComponent } from './admin/adminadoptionrequest/adminadoptionrequest.component';
import { AdminimportComponent } from './admin/adminimport/adminimport.component';
import { AdminanimallistComponent } from './admin/adminanimallist/adminanimallist.component'; 
import { DogprofileComponent } from './admin/dogprofile/dogprofile.component';

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
  { path: 'admin/adminlogin', component: AdminloginComponent },
  { path: '', redirectTo: '/admin/adminadoptionrequest', pathMatch: 'full' },
  {
    path: 'admin/adminadoptionrequest',
    component: AdminadoptionrequestComponent,
  },
  { path: '', redirectTo: '/admin/adminimport', pathMatch: 'full' },
  { path: 'admin/adminimport', component: AdminimportComponent },
  { path: '', redirectTo: '/admin/dogs', pathMatch: 'full' },
  { path: 'admin/dogs', component: AdminanimallistComponent },
  { path: '', redirectTo: '/admin/dogprofile/:id', pathMatch: 'full' },
  { path: 'admin/dogprofile/:id', component: DogprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
