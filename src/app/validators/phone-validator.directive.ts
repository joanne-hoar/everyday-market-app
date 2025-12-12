import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

/**
 * Phone Validator Directive
 * 
 * Custom validator that ensures phone numbers are exactly 10 digits.
 * Accepts various formats but validates that exactly 10 digits are present.
 * 
 * Validation Rules:
 * - Must contain exactly 10 digits
 * - Can include formatting characters like spaces, dashes, parentheses
 * - Only digits count toward the 10-digit requirement
 */
@Directive({
  selector: '[appPhoneValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidatorDirective,
      multi: true
    }
  ]
})
export class PhoneValidatorDirective implements Validator {
  
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    
    if (!value) {
      return null; // Let required validator handle empty values
    }

    // Extract only digits from the phone number
    const digitsOnly = value.replace(/\D/g, '');
    
    // Validate that we have exactly 10 digits
    if (digitsOnly.length !== 10) {
      return { phoneInvalid: true };
    }

    return null;
  }
}