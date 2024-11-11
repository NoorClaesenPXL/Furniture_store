import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { BasketService } from '../../services/basket.service';
import { Basket } from '../../models/basket.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../../app.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentBasket?: Basket;

  constructor(private productService: ProductService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => (this.products = data),
      (error) => console.error('Error fetching products:', error)
    );
    this.loadCurrentBasket();
  }

  loadCurrentBasket(): void {
    this.basketService.getCurrentBasket().subscribe((basket) => {
      this.currentBasket = basket;
    });
  }

  addToBasket(product: Product): void {
    this.basketService.addProductToBasket(product);

    this.loadCurrentBasket();
  }
}
