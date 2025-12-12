import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, NgForm } from '@angular/forms';

import { RegisterPageComponent } from './register-page';
import { NameValidatorDirective } from '../../validators/name-validator.directive';
import { PhoneValidatorDirective } from '../../validators/phone-validator.directive';

describe('RegisterPage', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPageComponent, RouterTestingModule, FormsModule, NameValidatorDirective, PhoneValidatorDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty user data', () => {
    expect(component.user).toEqual({
      name: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      streetAddress: '',
      province: '',
      country: '',
      acceptTerms: false
    });
  });

  it('should have Canadian provinces and countries list', () => {
    expect(component.provinces.length).toBeGreaterThan(0);
    expect(component.provinces).toContain('Ontario');
    expect(component.provinces).toContain('British Columbia');
    
    expect(component.countries).toContain('Canada');
    expect(component.countries).toContain('United States');
  });

  it('should validate form correctly when all fields are valid', () => {
    component.user = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      dateOfBirth: '1990-01-01',
      streetAddress: '123 Main St',
      province: 'Ontario',
      country: 'Canada',
      acceptTerms: true
    };
    
    const mockForm = { valid: true } as Partial<NgForm>;
    expect(component.isFormValid(mockForm as NgForm)).toBeTruthy();
  });

  it('should invalidate form when terms are not accepted', () => {
    component.user = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      dateOfBirth: '1990-01-01',
      streetAddress: '123 Main St',
      province: 'Ontario',
      country: 'Canada',
      acceptTerms: false  // Not accepted
    };
    
    const mockForm = { valid: true } as Partial<NgForm>;
    expect(component.isFormValid(mockForm as NgForm)).toBeFalsy();
  });

  it('should invalidate form when country is not Canada', () => {
    component.user = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      dateOfBirth: '1990-01-01',
      streetAddress: '123 Main St',
      province: 'Ontario',
      country: 'United States',  // Not Canada
      acceptTerms: true
    };
    
    const mockForm = { valid: true } as Partial<NgForm>;
    expect(component.isFormValid(mockForm as NgForm)).toBeFalsy();
  });

  it('should handle null form valid property', () => {
    component.user = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      dateOfBirth: '1990-01-01',
      streetAddress: '123 Main St',
      province: 'Ontario',
      country: 'Canada',
      acceptTerms: true
    };
    
    const mockForm = { valid: null } as Partial<NgForm>;
    expect(component.isFormValid(mockForm as NgForm)).toBeFalsy();
  });
});
