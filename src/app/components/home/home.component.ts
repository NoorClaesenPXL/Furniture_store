import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { BasketComponent } from '../basket/basket.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, 
    CommonModule, BasketComponent, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
