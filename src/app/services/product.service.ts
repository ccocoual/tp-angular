import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = 'http://localhost:8080/rest';
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get(`${this.API_URL}/products`)
      .pipe(
        map((products: any[]) =>
          products.map(
            product => new Product(product.title, product.description, product.photo, product.price, product.stock)
          )
        )
      );
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1;
  }

  isAvailable(product: Product): boolean {
    return product.stock > 0;
  }

  decreaseStock(product: Product) {
    product.stock--;
  }
}
