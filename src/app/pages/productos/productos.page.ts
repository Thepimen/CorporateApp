import { Component, OnInit } from '@angular/core';
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
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  async ngOnInit() {
    this.products = await this.productService.getProducts();
  }
}
