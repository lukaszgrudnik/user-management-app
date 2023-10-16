import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from '../../defs/user-details';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  user: UserDetails | undefined;
  constructor(private route: ActivatedRoute) {
    this.user = (route.snapshot.data as { user: UserDetails })?.user;
  }
}
