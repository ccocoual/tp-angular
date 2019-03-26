import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(products: Product[]): Product[] {
    return [...products].sort((p1, p2) => p1.title.localeCompare(p2.title));
  }
}
