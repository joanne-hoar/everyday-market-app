import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * CategoryMenuItemComponent - Individual category display item
 * 
 * This component represents a single category that users can click to select.
 * It demonstrates modern Angular component communication patterns using
 * @Input() and @Output() decorators.
 * 
 * Features:
 * - Receives category name via property binding
 * - Emits click events to parent component
 * - Interactive hover effects and animations
 * - Gradient styling with modern design
 * 
 * Usage:
 * <app-category-menu-item 
 *   [categoryName]="category.name" 
 *   (itemClicked)="onItemSelected($event)">
 * </app-category-menu-item>
 */
@Component({
  selector: 'app-category-menu-item',
  imports: [],
  templateUrl: './category-menu-item.html',
  styleUrl: './category-menu-item.css',
})
export class CategoryMenuItem {
  /** The display name of the category received from parent component */
  @Input() categoryName = '';
  
  /** Event emitter for when this category item is clicked */
  @Output() itemClicked = new EventEmitter<string>();

  /**
   * Handles click events on the category item
   * Emits the categoryName to the parent component
   */
  onItemClick(): void {
    this.itemClicked.emit(this.categoryName);
  }
}
