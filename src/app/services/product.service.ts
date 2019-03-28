import { Injectable } from '@angular/core';
import { Product } from '../shared/model/product';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_URL = 'http://localhost:8080/rest/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get(this.API_URL)
      .pipe(
        map((products: any[]) =>
          products.map(
            product =>
              new Product(product.id, product.title, product.description, product.photo, product.price, product.stock)
          )
        )
      );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
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
