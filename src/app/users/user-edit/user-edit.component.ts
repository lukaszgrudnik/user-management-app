import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDetails } from '../../defs/user-details';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit {
  @ViewChild('editUserForm') editUserForm: NgForm | undefined;

  user: UserDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = (this.route.snapshot.data as { user: UserDetails })?.user;
  }

  save(): void {
    this.editUserForm?.form.markAllAsTouched();

    if (this.editUserForm?.valid && this.user) {
      this.userService.editUser(this.user).subscribe({
        next: () => {
          alert('User data updated');
        },
        error: () => {
          alert('Cannot update data ');
        },
      });
    }
  }
}
