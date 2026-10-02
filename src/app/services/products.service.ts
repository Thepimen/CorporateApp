import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  async getProducts(): Promise<Product[]> {
    try {
      const res = await fetch('assets/data/products.json');
      return await res.json();
    } catch {
      return [];
    }
  }
}
