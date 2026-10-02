import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonGrid, IonRow, IonCol,
  IonBadge
} from '@ionic/angular';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonGrid, IonRow, IonCol,
    IonBadge
  ]
})
export class ProductosPage implements OnInit {
  products: Product[] = [
    { id: 1, nombre: 'Portátil Dell XPS 15', vendedor: 'Dell Official Store', unidades: 12, precio: 1200, foto: 'https://picsum.photos/id/1/100/100' },
    { id: 2, nombre: 'Monitor LG UltraFine 4K', vendedor: 'LG Electronics Hub', unidades: 8, precio: 299, foto: 'https://picsum.photos/id/2/100/100' },
    { id: 3, nombre: 'Teclado Mecánico Custom', vendedor: 'CustomKeys Prime', unidades: 25, precio: 149, foto: 'https://picsum.photos/id/3/100/100' }
  ];

  constructor(
    private productService: ProductsService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.cargarProductos();
  }

  async ionViewWillEnter() {
    await this.cargarProductos();
  }

  async cargarProductos() {
    const data = await this.productService.getProducts();
    if (data && data.length > 0) {
      this.products = data;
    }
    this.cdr.detectChanges();
  }
}
