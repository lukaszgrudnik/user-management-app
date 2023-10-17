import { Injectable } from '@angular/core';
import { User } from '../defs/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserDetails } from '../defs/user-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/user/list');
  }

  getUserWithDetails(id: string): Observable<UserDetails> {
    return this.httpClient.get<UserDetails>(
      'http://localhost:3000/user/details',
      {
        params: new HttpParams().set('id', id),
      }
    );
  }

  addUser(userDetails: UserDetails): Observable<void> {
    return this.httpClient.post<void>(
      'http://localhost:3000/user/add',
      userDetails
    );
  }
}
