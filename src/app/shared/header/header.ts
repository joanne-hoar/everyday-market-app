import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VERSION } from '@angular/core';

/**
 * HeaderComponent - Global header component with practice project styling
 * 
 * Features:
 * - Navigation links for register and products pages
 * - Angular version display
 * - Golden to orange gradient background from practice project
 * - Store front image display
 * - RouterLink integration for Assignment 3
 * 
 * This component demonstrates:
 * - Angular 17+ standalone component architecture
 * - @Input property for customizable title
 * - RouterLink and RouterLinkActive directives
 * - Practice project styling integration
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() title = "Front End Frameworks Everyday Market";
  
  // Angular version information
  angularVersion = VERSION.full;
}
