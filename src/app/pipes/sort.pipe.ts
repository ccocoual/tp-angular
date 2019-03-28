import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(products: Product[], key: keyof Product = 'title'): Product[] {
    if (!products) return null;
    return [...products].sort((p1, p2) => {
      if (p1[key] > p2[key]) {
        return 1;
      }
      if (p1[key] < p2[key]) {
        return -1;
      }
      return 0;
    });
  }
}
