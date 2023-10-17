import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
})
export class UserCreatorComponent {
  @ViewChild('createUserForm') createUserForm: NgForm | undefined;

  constructor(private userService: UserService) {}

  create(): void {
    this.createUserForm?.form.markAllAsTouched();
    if (this.createUserForm?.valid) {
      this.userService.addUser(this.createUserForm.value).subscribe({
        next: () => {
          this.createUserForm?.resetForm({});
        },
        error: () => {
          this.createUserForm?.resetForm({});
        },
      });
    }
  }
}
