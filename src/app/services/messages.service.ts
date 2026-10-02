import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export interface MensajeContacto {
  correo: string;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class MessagesService {
  async guardarMensaje(data: MensajeContacto): Promise<void> {
    await Preferences.set({ key: 'ultimoMensaje', value: JSON.stringify(data) });
  }

  async obtenerUltimoMensaje(): Promise<MensajeContacto | null> {
    const { value } = await Preferences.get({ key: 'ultimoMensaje' });
    return value ? JSON.parse(value) : null;
  }
}
