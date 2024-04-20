import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {
  pedidos = [
    {
      numero: 1,
      estado: 'Pendiente',
      cliente: 'Juan Pérez',
      fecha: new Date(),
      productos: [
        { nombre: 'Sofá', precio: 500, cantidad: 1 },
        { nombre: 'Mesa', precio: 300, cantidad: 1 },
        { nombre: 'Silla', precio: 200, cantidad: 2 }
      ],
      total: 1500
    },
    {
      numero: 2,
      estado: 'Proceso',
      cliente: 'María González',
      fecha: new Date(),
      productos: [
        { nombre: 'Cama', precio: 800, cantidad: 1 },
        { nombre: 'Escritorio', precio: 400, cantidad: 1 },
        { nombre: 'Armario', precio: 1300, cantidad: 1 }
      ],
      total: 2500
    },
    {
      numero: 3,
      estado: 'Completado',
      cliente: 'Carlos Rodríguez',
      fecha: new Date(),
      productos: [
        { nombre: 'Sillón', precio: 300, cantidad: 1 },
        { nombre: 'Lámpara', precio: 150, cantidad: 2 },
        { nombre: 'Mesa de centro', precio: 200, cantidad: 1 }
      ],
      total: 800
    }
  ];
}
