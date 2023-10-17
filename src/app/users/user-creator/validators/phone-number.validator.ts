import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPhoneNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneNumberValidator,
      multi: true,
    },
  ],
})
export class PhoneNumberValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return new RegExp(/^(\+?[0-9]{7,15})?$/).test(control.value)
      ? null
      : { invalidPhoneNumber: { value: control.value } };
  }
}
