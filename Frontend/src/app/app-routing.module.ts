import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCountryComponent } from './show-country/show-country.component';
import { ShowCountriesComponent } from './show-countries/show-countries.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdoptionpageComponent } from './adoptionpage/adoptionpage.component';
import { AdoptionformComponent } from './adoptionform/adoptionform.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminadoptionrequestComponent } from './adminadoptionrequest/adminadoptionrequest.component';
import { AdminimportComponent } from './adminimport/adminimport.component';
import { AdminanimallistComponent } from './adminanimallist/adminanimallist.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/adoptionpage', pathMatch: 'full' },
  { path: 'adoptionpage', component: AdoptionpageComponent },
  { path: '', redirectTo: '/adoptionform', pathMatch: 'full' },
  { path: 'adoptionform', component: AdoptionformComponent },
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: '', redirectTo: '/adminlogin', pathMatch: 'full' },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: '', redirectTo: '/adminadoptionrequest', pathMatch: 'full' },
  { path: 'adminadoptionrequest', component: AdminadoptionrequestComponent },
  { path: '', redirectTo: '/adminimport', pathMatch: 'full' },
  { path: 'adminimport', component: AdminimportComponent},
  { path: '', redirectTo: '/adminanimallist', pathMatch: 'full' },
  { path: 'adminanimallist', component: AdminanimallistComponent },  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

