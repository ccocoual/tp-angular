import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  basket: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this.basket.push(product);
  }

  getTotal(): number {
    return this.basket.reduce((total, product) => (total += product.price), 0);
  }
}
