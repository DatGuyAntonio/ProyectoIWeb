import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mensjaes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensjaes.component.html',
  styleUrl: './mensjaes.component.scss'
})
export class MensjaesComponent {
  messages = [
    { nombre: 'Juan', telefono: '123-456-7890', correo: 'juan@example.com', fecha: new Date(), cuerpo: 'Hola, ¿cómo estás?' },
    { nombre: 'María', telefono: '987-654-3210', correo: 'maria@example.com', fecha: new Date(), cuerpo: 'Estoy interesado en comprar algunos muebles.' },
    // Otros mensajes...
  ];
}
