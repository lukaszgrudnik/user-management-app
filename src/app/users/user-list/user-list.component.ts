import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, tap } from 'rxjs';
import { User } from '../../defs/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: Observable<User[]> | undefined;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    // console.log(this.users.subscribe()
  }
}
