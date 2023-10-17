import { AbstractControl, FormControl } from '@angular/forms';
import { PhoneNumberValidator } from './phone-number.validator';

describe('PhoneNumberValidator', () => {
  let validator: PhoneNumberValidator;

  beforeEach(() => {
    validator = new PhoneNumberValidator();
  });

  it('should return null for a valid phone number', () => {
    const control = new FormControl('1234567890');
    const result = validator.validate(control);
    expect(result).toBeNull();
  });

  it('should return an error object for an invalid phone number', () => {
    const control = new FormControl('abc1234567');
    const result = validator.validate(control);
    expect(result).toEqual({ invalidPhoneNumber: { value: 'abc1234567' } });
  });

  it('should return null for an empty input', () => {
    const control = new FormControl('');
    const result = validator.validate(control);
    expect(result).toBeNull();
  });
});
