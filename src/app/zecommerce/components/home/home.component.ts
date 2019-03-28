import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Product } from 'src/app/shared/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  sortKey: keyof Product = 'title';

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    @Inject('appTitle') private title: String
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => (this.products = products));
    this.customerService.getBasket().subscribe();
  }

  isAvailable(product) {
    return this.productService.isAvailable(product);
  }

  getTotal() {
    return this.customerService.getTotal();
  }

  updateBasketTotal(event) {
    this.customerService.addProduct(event).subscribe(() => this.productService.decreaseStock(event));
  }
}
