import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito = new BehaviorSubject<{ sku: string, cantidad: number, precio: number }[]>([]);
  carritoActual = this.carrito.asObservable();

  constructor() { }

  actualizarCarrito(mueblesCarrito: { sku: string, cantidad: number, precio: number }[]) {
    this.carrito.next(mueblesCarrito);
  }

  resetearCarrito() {
    this.carrito.next([]);
  }
}
