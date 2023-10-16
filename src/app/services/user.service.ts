import { Injectable } from '@angular/core';
import { User } from '../defs/user';
import { Observable, timer } from 'rxjs';
import { UserDetails } from '../defs/user-details';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userDataService: UserDataService) {}

  getUsers(): Observable<User[]> {
    return new Observable(subscriber => {
      subscriber.next(this.userDataService.users ?? []);
      subscriber.complete();
    });
  }

  getUserById(id: string): Observable<UserDetails> {
    return new Observable(subscriber => {
      const user: UserDetails | undefined =
        this.userDataService.usersWithDetails.find(user => user.id === id);
      if (user) subscriber.next(user);
      else subscriber.error();
      subscriber.complete();
    });
  }

  addUser(userDetails: UserDetails): Observable<void> {
    return new Observable(subscriber => {
      this.userDataService.getUsers().push({
        id: `20`,
        name: userDetails.name,
        surname: userDetails.surname,
        age: 20,
      } as User);

      this.userDataService.getUsersWithDetails().push(userDetails);

      timer(2000).subscribe(() => {
        subscriber.next();
        subscriber.complete();
      });
    });
  }
}
