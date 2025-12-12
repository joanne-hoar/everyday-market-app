import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

/**
 * Name Validator Directive
 * 
 * Custom validator that ensures names contain only letters and spaces
 * and have a minimum length of 5 characters.
 * 
 * Validation Rules:
 * - Must contain only letters (a-z, A-Z) and spaces
 * - Minimum 5 characters in length
 * - No numbers or special characters allowed
 */
@Directive({
  selector: '[appNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NameValidatorDirective,
      multi: true
    }
  ]
})
export class NameValidatorDirective implements Validator {
  
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    
    if (!value) {
      return null; // Let required validator handle empty values
    }

    // Regular expression for letters and spaces only, minimum 5 characters
    // Source: Custom regex for name validation with letters and spaces
    const namePattern = /^[a-zA-Z\s]{5,}$/;
    
    if (!namePattern.test(value)) {
      return { nameInvalid: true };
    }

    return null;
  }
}