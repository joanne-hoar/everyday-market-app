import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NameValidatorDirective } from '../../validators/name-validator.directive';
import { PhoneValidatorDirective } from '../../validators/phone-validator.directive';

/**
 * User interface to define the structure of user registration data
 */
export interface User {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  streetAddress: string;
  province: string;
  country: string;
  acceptTerms: boolean;
}

/**
 * RegisterPageComponent - Registration form with comprehensive validation
 * 
 * This component demonstrates:
 * - Template-driven forms with Angular FormModule
 * - Custom validation directives for complex validation rules
 * - Form state management and conditional submit button enabling
 * - Router navigation after successful form submission
 * - Canadian provinces and territories dropdown
 * 
 * Features:
 * - Name validation (letters and spaces, min 5 characters)
 * - Email format validation
 * - Phone number validation (10 digits)
 * - Date of birth picker with proper format
 * - Address validation with Canadian provinces
 * - Terms and conditions acceptance requirement
 * - Visual feedback for invalid and touched fields
 */
@Component({
  selector: 'app-register-page',
  imports: [FormsModule, CommonModule, NameValidatorDirective, PhoneValidatorDirective],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPageComponent {
  
  private router = inject(Router);
  
  // Form model
  user: User = {
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    streetAddress: '',
    province: '',
    country: '',
    acceptTerms: false
  };

  // Canadian provinces and territories
  provinces = [
    'Alberta',
    'British Columbia', 
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Northwest Territories',
    'Nova Scotia',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Yukon'
  ];

  countries = [
    'United States',
    'Canada'
  ];

  /**
   * Handles form submission
   * Navigates to products page after successful validation
   */
  onSubmit() {
    console.log('Form submitted with data:', this.user);
    this.router.navigate(['/products']);
  }

  /**
   * Checks if form is valid and all required fields are completed
   * Used to enable/disable submit button
   */
  isFormValid(form: NgForm): boolean {
    return (form.valid ?? false) && 
           this.user.acceptTerms && 
           this.user.country === 'Canada';
  }
}
