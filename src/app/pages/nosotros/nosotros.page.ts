import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonButton
} from '@ionic/angular';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent, IonButton
  ]
})
export class NosotrosPage implements OnInit {
  distancia: number | null = null;
  errorGps = '';

  constructor(private geoService: GeolocationService) {}

  async ngOnInit() {
    await this.cargarUbicacion();
  }

  async cargarUbicacion() {
    try {
      const coords = await this.geoService.getCurrentPosition();
      this.distancia = this.geoService.calcularDistancia(coords.latitude, coords.longitude);
      this.errorGps = '';
    } catch {
      this.errorGps = 'Active el GPS o permita el acceso a la ubicación.';
    }
  }
}
