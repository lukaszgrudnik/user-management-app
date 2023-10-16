import { Injectable } from '@angular/core';
import { User } from '../spec/user';
import { users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<User[]> {
    return new Observable(subscriber => {
      subscriber.next(users ?? []);
    });
  }

  getUser(id: string): Observable<User> {
    return new Observable(subscriber => {
      const user: User | undefined = users.find(user => user.id === id);
      if (user) subscriber.next(user);
      else throw Error;
    });
  }
}
