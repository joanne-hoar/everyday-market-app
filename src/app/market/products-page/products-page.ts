import { Component } from '@angular/core';
import { CategoryMenu } from '../category-menu/category-menu';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';

/**
 * Product interface to define the structure of product objects
 */
export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
}

/**
 * ProductsPageComponent - Main page component for browsing products by category
 * 
 * Features:
 * - Displays product categories from practice project
 * - Shows filtered products when category is selected
 * - Uses real product data with images and descriptions
 * - Matches practice project functionality
 */
@Component({
  selector: 'app-products-page',
  imports: [CategoryMenu, CommonModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  /**
   * Hard-coded list of product categories matching practice project
   * These represent the three main categories available in the store
   * Each category has a unique ID and matches the practice project structure
   */
  categoryList: Category[] = [
    { id: 1, name: 'Grocery' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Stationary' }
  ];

  /**
   * All products from practice project
   */
  allProducts: Product[] = [
    {
      id: 1,
      name: "Can of Beans",
      image: "can-of-beans.jpg",
      description: "Full of magical moments, this can of beans could be yours!",
      category: "grocery"
    },
    {
      id: 2,
      name: "Bag of Crisps",
      image: "bag-of-crisps.jpg",
      description: "That should say chips. Any flavour you want.",
      category: "grocery"
    },
    {
      id: 3,
      name: "Gummy Bears",
      image: "gummy-bears.jpg",
      description: "Be sure to specify quantity as we have too many and will send you a lot.",
      category: "grocery"
    },
    {
      id: 4,
      name: "T-Shirt",
      image: "t-shirt.jpg",
      description: "Wear this t-shirt and you will have good luck.",
      category: "clothing"
    },
    {
      id: 5,
      name: "Hobo Bag",
      image: "hobo-bag.jpg",
      description: "Fits everything you need.",
      category: "clothing"
    },
    {
      id: 6,
      name: "Shoes",
      image: "shoes.jpg",
      description: "Shown one, comes in pairs.",
      category: "clothing"
    },
    {
      id: 7,
      name: "Shorts",
      image: "shorts.jpg",
      description: "Complete the look.",
      category: "clothing"
    },
    {
      id: 8,
      name: "Postcard",
      image: "postcard.jpg",
      description: "Let them know that you're thinking of them.",
      category: "stationary"
    },
    {
      id: 9,
      name: "Pens",
      image: "pens.jpg",
      description: "Contains ink.",
      category: "stationary"
    }
  ];

  selectedCategory = '';
  filteredProducts: Product[] = [];

  /**
   * Handles category selection events from the CategoryMenuComponent
   * Filters products by category and displays them
   * 
   * @param category - The selected category object
   */
  onCategorySelected(category: Category): void {
    this.selectedCategory = category.name.toLowerCase();
    this.filteredProducts = this.allProducts.filter(product => 
      product.category === this.selectedCategory
    );
  }
}
