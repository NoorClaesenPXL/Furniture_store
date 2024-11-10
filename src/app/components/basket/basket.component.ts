import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Basket } from '../../models/basket.model';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  productList: Product[] = [];
  currentBasket?: Basket;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    const productFetch = this.basketService.getProductsFromBasket();
    productFetch.subscribe((data: Product[]) => {
      this.productList = data;
    })

    const shoppingcartFetch = this.basketService.getCurrentBasket();
    shoppingcartFetch.subscribe((data: Basket | undefined) => {
      if (data){
        this.currentBasket = data;
      } else {
        this.currentBasket = undefined;
      }
    })
  }
}
