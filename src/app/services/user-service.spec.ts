import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  beforeEach(() => {
    service = new UserService();
  });

  it('#getUserById should get user with id 2', () => {
    service.getUserById('2').subscribe(user => {
      expect(user).toEqual({
        id: '2',
        name: 'Jane',
        surname: 'Smith',
        age: 25,
      });
    });
  });

  it('#getUserById should throw error because id is not found', () => {
    service.getUserById('50').subscribe({
      error: () => {
        expect(true).toBeTruthy();
      },
    });
  });
});
