import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
})
export class UserCreatorComponent {
  @ViewChild('createUserForm') createUserForm: NgForm | undefined;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  create(): void {
    this.createUserForm?.form.markAllAsTouched();
    if (this.createUserForm?.valid) {
      this.userService.addUser(this.createUserForm.value).subscribe({
        next: () => {
          this.createUserForm?.resetForm({});
          this.toastr.success('User created');
        },
        error: () => {
          this.createUserForm?.resetForm({});
          this.toastr.error('Cannot create user - error occurred');
        },
      });
    }
  }
}
