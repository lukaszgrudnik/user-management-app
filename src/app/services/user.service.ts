import { Injectable } from '@angular/core';
import { User } from '../defs/user';
import { Observable } from 'rxjs';
import { UserDetails } from '../defs/user-details';
import { HttpParams } from '@angular/common/http';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userDataService: UserDataService) {}

  getUsers(): Observable<User[]> {
    return this.userDataService.getUsers();
  }

  getUserById(id: string): Observable<UserDetails> {
    return this.userDataService.getUserWithDetails(id);
  }

  addUser(userDetails: UserDetails): Observable<void> {
    return this.userDataService.addUser(userDetails);
  }
}
