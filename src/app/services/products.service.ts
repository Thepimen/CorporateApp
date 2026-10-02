import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  async getProducts(): Promise<Product[]> {
    try {
      let res = await fetch('/assets/data/products.json');
      if (!res.ok) {
        res = await fetch('assets/data/products.json');
      }
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }
      return await res.json();
    } catch (err) {
      console.warn('Fallback a datos locales integrados:', err);
      return [
        { id: 1, nombre: 'Portátil Dell XPS 15', vendedor: 'Dell Official Store', unidades: 12, precio: 1200, foto: 'https://picsum.photos/id/1/100/100' },
        { id: 2, nombre: 'Monitor LG UltraFine 4K', vendedor: 'LG Electronics Hub', unidades: 8, precio: 299, foto: 'https://picsum.photos/id/2/100/100' },
        { id: 3, nombre: 'Teclado Mecánico Custom', vendedor: 'CustomKeys Prime', unidades: 25, precio: 149, foto: 'https://picsum.photos/id/3/100/100' }
      ];
    }
  }
}
