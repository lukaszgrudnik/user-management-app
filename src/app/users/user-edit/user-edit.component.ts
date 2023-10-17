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

  save() {
    this.editUserForm?.form.markAllAsTouched();

    if (this.editUserForm?.valid && this.user) {
      const userDetails: UserDetails = this.createUserDetails(
        this.user.id,
        this.editUserForm
      );

      this.userService.editUser(userDetails).subscribe({
        next: () => {
          alert('User data updated');
        },
        error: () => {
          alert('Cannot update data ');
        },
      });
    }
  }

  createUserDetails(userId: string, form: NgForm) {
    return {
      id: userId,
      name: form.value.name,
      surname: form.value.surname,
      age: form.value.age,
      address: {
        street: form.value.street,
        city: form.value.city,
        postalCode: form.value.postalCode,
      },
      phoneNumber: {
        countryCode: '',
        number: form.value.phoneNumber,
      },
      email: form.value.email,
    };
  }

  ngOnInit(): void {
    this.user = (this.route.snapshot.data as { user: UserDetails })?.user;
  }
}
