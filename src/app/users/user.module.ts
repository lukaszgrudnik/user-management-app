import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterLink } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, RouterLink, UserRoutingModule],
  exports: [UserListComponent],
})
export class UserModule {}