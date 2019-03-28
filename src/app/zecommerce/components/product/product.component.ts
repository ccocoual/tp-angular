import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  // The component will be refreshed only if the reference of Input change and not if only a property of the product change
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToBasket: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {}

  isTheLast(): boolean {
    return this.productService.isTheLast(this.product);
  }

  handleAddToBasket() {
    this.addToBasket.emit(this.product);
  }

  goToProductDetail() {
    this.router.navigate(['product', this.product.id], { relativeTo: this.route });
  }
}
