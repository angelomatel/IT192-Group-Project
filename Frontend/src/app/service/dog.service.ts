import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Dog } from '../model/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  apiUrl: string

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:18080/api';
  }

  public getDog(id: number): Observable<Dog> {
    return this.http.get<Dog>(this.apiUrl + '/show-Dog/' + id.toString());
  }

  public getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl + '/dogs/');
  }

  public addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.apiUrl + '/add-dog/', dog);
  }

  public updateDog(id: Number, dog: Dog): Observable<Dog> {
    return this.http.put<Dog>(this.apiUrl + '/update-dog/' + id, dog);
  }

  public deleteDog(id: Number): Observable<Dog> {
    return this.http.delete<Dog>(this.apiUrl + '/delete-dog/' + id);
  }
}
