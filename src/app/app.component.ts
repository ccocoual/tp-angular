import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';

import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  total = 0;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  updateBasketTotal(product: Product) {
    this.productService.decreaseStock(product);
    this.total += product.price;
  }
}
