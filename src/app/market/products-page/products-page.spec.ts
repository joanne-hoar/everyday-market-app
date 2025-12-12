import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPage } from './products-page';
import { Category } from '../models/category';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty selected category and empty filtered products', () => {
    expect(component.selectedCategory).toBe('');
    expect(component.filteredProducts).toEqual([]);
  });

  it('should have predefined categories', () => {
    expect(component.categoryList).toEqual([
      { id: 1, name: 'Grocery' },
      { id: 2, name: 'Clothing' },
      { id: 3, name: 'Stationary' }
    ]);
  });

  it('should have products data with proper structure', () => {
    expect(component.allProducts.length).toBeGreaterThan(0);
    const firstProduct = component.allProducts[0];
    expect(firstProduct.id).toBeDefined();
    expect(firstProduct.name).toBeDefined();
    expect(firstProduct.image).toBeDefined();
    expect(firstProduct.description).toBeDefined();
    expect(firstProduct.category).toBeDefined();
    expect(typeof firstProduct.id).toBe('number');
    expect(typeof firstProduct.name).toBe('string');
  });

  it('should filter products when category is selected', () => {
    const mockCategory: Category = { id: 1, name: 'Grocery' };
    
    component.onCategorySelected(mockCategory);
    
    expect(component.selectedCategory).toBe('grocery');
    expect(component.filteredProducts.length).toBeGreaterThan(0);
    expect(component.filteredProducts.every(product => product.category === 'grocery')).toBeTruthy();
  });

  it('should filter clothing products correctly', () => {
    const mockCategory: Category = { id: 2, name: 'Clothing' };
    
    component.onCategorySelected(mockCategory);
    
    expect(component.selectedCategory).toBe('clothing');
    expect(component.filteredProducts.every(product => product.category === 'clothing')).toBeTruthy();
  });

  it('should filter stationary products correctly', () => {
    const mockCategory: Category = { id: 3, name: 'Stationary' };
    
    component.onCategorySelected(mockCategory);
    
    expect(component.selectedCategory).toBe('stationary');
    expect(component.filteredProducts.every(product => product.category === 'stationary')).toBeTruthy();
  });

  it('should handle category name case insensitively', () => {
    const mockCategory: Category = { id: 1, name: 'GROCERY' };
    
    component.onCategorySelected(mockCategory);
    
    expect(component.selectedCategory).toBe('grocery');
    expect(component.filteredProducts.every(product => product.category === 'grocery')).toBeTruthy();
  });
});
