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

  getAllNotOrderedBaskets(): Observable<Basket[]>{
    const baskets: Basket[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    const notOrderedBaskets = baskets.filter(basket => !basket.orderPlaced);
    return of(notOrderedBaskets);
  }

  addProductToBasket(product: Product): void {
    const baskets: Basket[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    let currentBasket = baskets.find(basket => !basket.orderPlaced);

    if (!currentBasket) {
      currentBasket = new Basket(Date.now(), 0, false);
      baskets.push(currentBasket);
    }

    currentBasket.products.push(product);
    currentBasket.total += product.price;

    localStorage.setItem(this.storageKey, JSON.stringify(baskets));
  }

  getProductsFromBasket(): Observable<Product[]>{
    const baskets: Basket[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    let currentBasket = baskets.find(basket => !basket.orderPlaced);

    const products = currentBasket ? currentBasket.products : [];

    return of(products);
  }

  orderBasket() : void{
    const baskets: Basket[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    let currentBasket = baskets.find(basket => !basket.orderPlaced);

    if(currentBasket){
      currentBasket.orderPlaced = true;
      localStorage.setItem(this.storageKey, JSON.stringify(baskets));
    }
  }

  deleteProductFromBasket(productId: number): void{
    const baskets: Basket[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    let currentBasket = baskets.find(basket => !basket.orderPlaced);

    if(currentBasket){
      currentBasket.products = currentBasket.products.filter(product => product.id !== productId);
      currentBasket.total = currentBasket.products.reduce((sum, product) => sum + product.price, 0);
      localStorage.setItem(this.storageKey, JSON.stringify(baskets));
    }
  }
}
