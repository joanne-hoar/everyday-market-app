import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryMenuItem } from '../category-menu-item/category-menu-item';
import { Category } from '../models/category';

/**
 * CategoryMenuComponent - Container component for displaying multiple category items
 * 
 * This component demonstrates modern Angular 17+ features:
 * - Uses the new @for control flow syntax instead of *ngFor
 * - Standalone component architecture (no NgModules required)
 * - Component communication via @Input() and @Output()
 * - Proper event bubbling from child to parent components
 * 
 * Features:
 * - Displays a grid of category items
 * - Handles click events from child components
 * - Responsive layout that adapts to screen size
 * - Uses track function for optimal change detection
 * 
 * Usage:
 * <app-category-menu 
 *   [categories]="categoryList"
 *   (categorySelected)="onCategorySelected($event)">
 * </app-category-menu>
 */
@Component({
  selector: 'app-category-menu',
  imports: [CategoryMenuItem],
  templateUrl: './category-menu.html',
  styleUrl: './category-menu.css',
})
export class CategoryMenu {
  /** Array of categories to display, received from parent component */
  @Input() categories: Category[] = [];
  
  /** Event emitter for when a category is selected */
  @Output() categorySelected = new EventEmitter<Category>();

  /**
   * Handles click events from CategoryMenuItem components
   * Bubbles the event up to the parent component
   * 
   * @param category - The category that was clicked
   */
  onItemClicked(category: Category): void {
    this.categorySelected.emit(category);
  }
}
