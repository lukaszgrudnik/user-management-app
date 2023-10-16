import { Injectable } from '@angular/core';
import { User } from '../defs/user';
import { users } from '../data/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<User[]> {
    return new Observable(subscriber => {
      subscriber.next(users ?? []);
      subscriber.complete();
    });
  }

  getUserById(id: string): Observable<User> {
    return new Observable(subscriber => {
      const user: User | undefined = users.find(user => user.id === id);
      if (user) subscriber.next(user);
      else subscriber.error();
      subscriber.complete();
    });
  }
}