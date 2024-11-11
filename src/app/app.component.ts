import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './components/basket/basket.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, 
    CommonModule, BasketComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'furniture_store';


  constructor(private renderer: Renderer2) {}

    styleOptions = [
      { name: 'Minimalist', value: 'minimalist' },
      { name: 'Retro', value: 'retro' },
      { name: 'Dark mode', value: 'dark-mode' },
      { name: 'Classic', value: 'classic' }
    ];
  
    selectedStyle: string = 'minimalist';
  
    getStyleClass() {
      return this.selectedStyle;
    }
}
