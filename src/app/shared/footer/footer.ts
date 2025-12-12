import { Component } from '@angular/core';
import { VERSION } from '@angular/core';

/**
 * FooterComponent - Global footer component with cottage core styling
 * 
 * Features:
 * - Copyright information and course attribution
 * - Angular version display
 * - Design and development credits
 * - Responsive design matching header aesthetic
 * - Clean, professional footer layout
 * 
 * This component demonstrates:
 * - Angular 17+ standalone component architecture
 * - Version information display
 * - Consistent styling with header component
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  /**
   * Angular version for display in footer
   */
  angularVersion: string = VERSION.full;
}