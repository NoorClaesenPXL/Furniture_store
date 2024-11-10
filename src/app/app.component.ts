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
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'furniture_store';

  styleOptions = [
    { label: 'Retro', value: 'retro-style' },
    { label: 'Minimalist', value: 'minimalist-style' }
  ];

  constructor(private renderer: Renderer2) {}

  applyStyle(event: Event) {
    const selectElement = event.target as HTMLSelectElement | null;
    const styleClass = selectElement?.value;
  
    if (!styleClass) return;
  
    this.styleOptions.forEach(option => {
      this.renderer.removeClass(document.body, option.value);
    });
  
    this.renderer.addClass(document.body, styleClass);
  }

  backgroundColor: string = 'white';

  colors = ['white', 'lightblue', 'lightgreen', 'lightyellow', 'lightcoral'];

  changeBackgroundColor(event: Event) {
    const selectedColor = (event.target as HTMLSelectElement).value;
    this.backgroundColor = selectedColor;
  }
}
