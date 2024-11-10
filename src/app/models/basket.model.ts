import { Product } from "./product.model";

export class Basket {
    id?: number;
    total: number;
    orderPlaced: boolean;
    products: Product[];
  
    constructor(id: number, total: number, orderPlaced: boolean) {
      this.id = id;
      this.total = total;
      this.orderPlaced = orderPlaced;
      this.products = [];
    }
  }
  