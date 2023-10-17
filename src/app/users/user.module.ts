import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterLink } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, UserCreatorComponent],
  imports: [CommonModule, RouterLink, UserRoutingModule, FormsModule],
  exports: [UserListComponent],
})
export class UserModule {}
