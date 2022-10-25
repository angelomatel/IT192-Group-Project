import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from 'app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:18080/api';
  }

  public getDog(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/show-user/' + id.toString());
  }

  public getDogs(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/users/');
  }

  public addDog(User: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/add-user/', User);
  }

  public updateDog(id: Number, User: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + '/update-user/' + id, User);
  }

  public deleteDog(id: Number): Observable<User> {
    return this.http.delete<User>(this.apiUrl + '/delete-user/' + id);
  }
}
