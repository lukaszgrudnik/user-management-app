import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component'; // Adjust the import path
import { UserService } from '../../services/user.service';
import { Observable, of } from 'rxjs';
import { User } from '../../defs/user';
import { RouterModule } from '@angular/router';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    userService = jasmine.createSpyObj('UserService', ['getUsers']);

    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [UserListComponent],
      providers: [{ provide: UserService, useValue: userService }],
    });

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display user data', () => {
    const sampleUsers: User[] = [
      {
        id: '2',
        name: 'Jane',
        surname: 'Smith',
        age: 25,
      },
      {
        id: '3',
        name: 'Alice',
        surname: 'Johnson',
        age: 28,
      },
    ];

    userService.getUsers.and.returnValue(of(sampleUsers));

    fixture.detectChanges();

    component.users?.subscribe(users => {
      expect(users).toEqual(sampleUsers);
    });
  });

  it('should handle an error while fetching user data', () => {
    userService.getUsers.and.returnValue(
      new Observable<User[]>(observer => {
        observer.error('Failed to fetch users');
      })
    );

    fixture.detectChanges(); // Trigger ngOnInit

    expect(component.users).toBeDefined();
    component.users?.subscribe({
      error: error => {
        expect(error).toBe('Failed to fetch users');
      },
    });
  });
});
