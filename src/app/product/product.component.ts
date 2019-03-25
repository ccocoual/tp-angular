import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToBasket: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService) {}

  ngOnInit() {}

  isTheLast(): boolean {
    return this.productService.isTheLast(this.product);
  }

  handleAddToBasket() {
    this.addToBasket.emit(this.product);
  }
}
