import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  private basket: Product[];
  private customer: Customer;

  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getBasket().subscribe(products => (this.basket = products));
    this.customer = new Customer();
  }

  checkout() {
    this.customerService.checkout(this.customer).subscribe(() => this.router.navigate(['/']));
  }
}
