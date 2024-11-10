import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Basket } from '../models/basket.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private storageKey = 'shoppingCart';

  constructor() { }

  private getCurrentBasketFromStorage(): Basket | undefined {
    const baskets: Basket[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    return baskets.find(basket => !basket.orderPlaced);
  }

  getAllNotOrderedBaskets(): Observable<Basket[]> {
    const baskets: Basket[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    const notOrderedBaskets = baskets.filter(basket => !basket.orderPlaced);
    return of(notOrderedBaskets);
  }

  getCurrentBasket(): Observable<Basket | undefined> {
    const currentBasket = this.getCurrentBasketFromStorage();
    return of(currentBasket);
  }

  addProductToBasket(product: Product): void {
    const baskets: Basket[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    let currentBasket = this.getCurrentBasketFromStorage();

    if (!currentBasket) {
      currentBasket = new Basket(Date.now(), 0, false);
      baskets.push(currentBasket);
    }

    currentBasket.products.push(product);
    currentBasket.total += product.price;

    localStorage.setItem(this.storageKey, JSON.stringify(baskets));
  }

  getProductsFromBasket(): Observable<Product[]> {
    const currentBasket = this.getCurrentBasketFromStorage();
    const products = currentBasket ? currentBasket.products : [];
    return of(products);
  }

  orderBasket(): void {
    const baskets: Basket[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    let currentBasket = this.getCurrentBasketFromStorage();

    if (currentBasket) {
      currentBasket.orderPlaced = true;
      localStorage.setItem(this.storageKey, JSON.stringify(baskets));
    }
  }

  deleteProductFromBasket(productId: number): void {
    const baskets: Basket[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    let currentBasket = this.getCurrentBasketFromStorage();

    if (currentBasket) {
      currentBasket.products = currentBasket.products.filter(product => product.id !== productId);
      currentBasket.total = currentBasket.products.reduce((sum, product) => sum + product.price, 0);
      localStorage.setItem(this.storageKey, JSON.stringify(baskets));
    }
  }
}
