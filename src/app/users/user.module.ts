import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterLink } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { FormsModule } from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PhoneNumberValidator } from './user-creator/validators/phone-number.validator';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component';
import { UserService } from './services/user.service';
import { UserDataService } from './services/user-data.service';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserCreatorComponent,
    UserEditComponent,
    PhoneNumberValidator,
    UserNotFoundComponent,
  ],
  imports: [CommonModule, RouterLink, UserRoutingModule, FormsModule],
  exports: [UserListComponent],
  providers: [UserService, UserDataService],
})
export class UserModule {}
