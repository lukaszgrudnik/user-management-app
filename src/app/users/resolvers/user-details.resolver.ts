import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDetails } from '../../defs/user-details';

export const userDetailsResolver: ResolveFn<UserDetails | undefined> = (
  route,
  state,
  userService = inject(UserService)
) => {
  const id = route.params['id'];
  return userService.getUserById(id);
};
