import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonItem, IonInput,
  IonTextarea, IonButton
} from '@ionic/angular';
import { MessagesService, MensajeContacto } from '../../services/messages.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent, IonItem, IonInput,
    IonTextarea, IonButton
  ]
})
export class ContactoPage implements OnInit {
  correo = '';
  mensaje = '';
  ultimo: MensajeContacto | null = null;

  constructor(private msgService: MessagesService) {}

  async ngOnInit() {
    this.ultimo = await this.msgService.obtenerUltimoMensaje();
  }

  async enviar() {
    if (!this.correo || !this.mensaje) return;
    const datos = { correo: this.correo, mensaje: this.mensaje };
    await this.msgService.guardarMensaje(datos);
    this.ultimo = datos;
    this.correo = '';
    this.mensaje = '';
  }
}
