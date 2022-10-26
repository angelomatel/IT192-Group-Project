import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Adoption } from 'app/model/adoption';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {
  apiUrl: string

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:18080/api';
  }

  public getAdoption(id: number): Observable<Adoption> {
    return this.http.get<Adoption>(this.apiUrl + '/adoption/' + id.toString());
  }

  public getAdoptions(): Observable<Adoption[]> {
    return this.http.get<Adoption[]>(this.apiUrl + '/adoptions/');
  }

  public addAdoption(adoption: Adoption): Observable<Adoption> {
    return this.http.post<Adoption>(this.apiUrl + '/add-adoption/', adoption);
  }

  public updateAdoption(id: number, adoption: Adoption): Observable<Adoption> {
    return this.http.put<Adoption>(this.apiUrl + '/update-adoption/' + id, adoption);
  }

  public deleteAdoption(id: number): Observable<Adoption> {
    return this.http.delete<Adoption>(this.apiUrl + '/delete-adoption/' + id);
  }
}
