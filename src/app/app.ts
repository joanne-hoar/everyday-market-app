import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

/**
 * AppComponent - Root component of the Everyday Market application
 * 
 * This is the main application component that serves as the entry point
 * for the Angular application. It demonstrates:
 * - Modern Angular 17+ standalone component architecture
 * - Component composition by importing and using other components
 * - Signal-based reactive state management
 * - Proper application structure with shared and feature components
 * 
 * Features:
 * - Displays the global header on all pages
 * - Shows the main products page with category browsing
 * - Includes router outlet for future navigation features
 * - Uses Angular 17+ signals for reactive state
 * 
 * Component Hierarchy:
 * App
 * ├── Header (Global navigation and branding)
 * ├── ProductsPage (Main content area)
 * │   └── CategoryMenu (Category listing)
 * │       └── CategoryMenuItem (Individual categories)
 * └── RouterOutlet (For future routing)
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /** Application title using Angular 17+ signals */
  protected readonly title = signal('everyday-market-app');
}
