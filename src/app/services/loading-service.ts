import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = signal(false);
  message = signal('Cargando...');

  show(msg: string = 'Cargando...') {
    this.message.set(msg);
    this.isLoading.set(true);
  }

  hide() {
    this.isLoading.set(false);
  }
}