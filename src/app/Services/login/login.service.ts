import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }



  // Método para guardar datos en el localStorage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Método para obtener datos del localStorage
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Método para eliminar un elemento del localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Método para limpiar todos los datos del localStorage
  clear(): void {
    localStorage.clear();
  }
}
