import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './components/basket/basket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, 
    CommonModule, BasketComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed typo from `styleUrl` to `styleUrls`
})
export class AppComponent {
  title = 'furniture_store';

  // Define style options with class names
  styleOptions = [
    { label: 'Retro', value: 'retro-style' },
    { label: 'Minimalist', value: 'minimalist-style' }
  ];

  constructor(private renderer: Renderer2) {}

  // Method to apply the selected style
  applyStyle(event: Event) {
    const selectElement = event.target as HTMLSelectElement | null; // Cast as HTMLSelectElement and handle null
    const styleClass = selectElement?.value;
  
    if (!styleClass) return; // Exit if styleClass is null or empty
  
    // Remove previously added style classes
    this.styleOptions.forEach(option => {
      this.renderer.removeClass(document.body, option.value);
    });
  
    // Add the selected style class
    this.renderer.addClass(document.body, styleClass);
  }
}
