import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDetails } from '../../defs/user-details';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit {
  @ViewChild('editUserForm') editUserForm: NgForm | undefined;

  user: UserDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.user = (this.route.snapshot.data as { user: UserDetails })?.user;
  }

  save(): void {
    this.editUserForm?.form.markAllAsTouched();

    if (this.editUserForm?.valid && this.user) {
      this.userService.editUser(this.user).subscribe({
        next: () => {
          this.toastr.success('User data updated');
        },
        error: () => {
          this.toastr.error('Cannot update data ');
        },
      });
    }
  }
}
