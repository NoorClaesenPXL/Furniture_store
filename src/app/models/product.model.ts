// src/app/models/product.model.ts
export class Product {
    id?: number;
    title: string;
    description: string;
    price: number;
    images: string;
    category: string;
  
    constructor(title: string, price: number, description: string, images: string, category: string) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.images = images;
      this.category = category;
    }
  }
  