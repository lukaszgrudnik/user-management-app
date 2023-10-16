import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user/details/:id',
    component: UserListComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./users/user.module').then(m => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
