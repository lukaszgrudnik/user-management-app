export interface UserDetails {
  id: string;
  name: string;
  surname: string;
  age: number;
  address: {
    postalCode: string;
    street: string;
    city: string;
  };
  phoneNumber: {
    countryCode: string;
    number: string;
  };
  email: string;
}
