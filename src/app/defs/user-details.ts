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
  phoneNumber: string;
  email: string;
}
