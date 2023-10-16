import { Injectable } from '@angular/core';
import { User } from '../defs/user';
import { users } from '../data/users';
import { UserDetails } from '../defs/user-details';
import { usersWithDetails } from '../data/details';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  users: User[];
  usersWithDetails: UserDetails[];
  constructor() {
    this.users = users;
    this.usersWithDetails = usersWithDetails;
  }

  getUsers(): User[] {
    return this.users;
  }

  getUsersWithDetails(): User[] {
    return this.usersWithDetails;
  }
}
