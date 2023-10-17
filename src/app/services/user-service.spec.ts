import { UserService } from './user.service';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  beforeEach(() => {
    // service = new UserService(inject(new HttpClient()));
  });

  it('#getUserById should get user with id 2', () => {
    service.getUserById('2').subscribe(user => {
      expect(user).toEqual({
        id: '2',
        name: 'Jane',
        surname: 'Smith',
        age: 25,
        address: {
          postalCode: '54321',
          street: '456 Elm St',
          city: 'Los Angeles',
        },
        phoneNumber: {
          countryCode: '+1',
          number: '555-234-5678',
        },
        email: 'jane.smith@email.com',
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
