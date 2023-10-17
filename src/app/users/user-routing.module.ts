import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { userDetailsResolver } from './resolvers/user-details.resolver';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: 'list/details/:id',
    component: UserDetailsComponent,
    resolve: { user: userDetailsResolver },
  },
  {
    path: 'list/create',
    component: UserCreatorComponent,
  },
  {
    path: 'list/edit/:id',
    component: UserEditComponent,
    resolve: { user: userDetailsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
