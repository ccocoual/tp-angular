import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

const testProduct = new Product('title', 'description', 'photo', 42, 3);

class ProductServiceMock {
  isTheLast() {
    return true;
  }
}

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productService: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [{ provide: ProductService, useClass: ProductServiceMock }],
    }).compileComponents();
    productService = TestBed.get(ProductService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = testProduct;
    fixture.detectChanges();
  });

  it('should bind title and price in the h3', () => {
    const h3Content = fixture.nativeElement.querySelector('h3').textContent;
    expect(h3Content).toContain(testProduct.title.toUpperCase());
    expect(h3Content).toContain(testProduct.price);
  });

  it('should bind the photo url', () => {
    const img = fixture.nativeElement.querySelector('img');
    expect(img.src).toContain(testProduct.photo);
  });

  it('should emit addToBasket event on a click on the button', () => {
    spyOn(component.addToBasket, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.addToBasket.emit).toHaveBeenCalled();
  });

  it('should not add "last" class if stock > 1', () => {
    spyOn(productService, 'isTheLast').and.returnValue(false);
    fixture.detectChanges();
    const thumbnail = fixture.nativeElement.querySelector('.thumbnail');
    expect(Array.prototype.includes.call(thumbnail.classList, 'last')).toBe(false);
    expect(productService.isTheLast).toHaveBeenCalled();
  });

  it('should add "last" class if stock == 1', () => {
    spyOn(productService, 'isTheLast').and.returnValue(true);
    fixture.detectChanges();
    const thumbnail = fixture.nativeElement.querySelector('.thumbnail');
    expect(Array.prototype.includes.call(thumbnail.classList, 'last')).toBe(true);
    expect(productService.isTheLast).toHaveBeenCalled();
  });
});
