import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [CommonModule,TabViewModule],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.scss'
})
export class AlmacenComponent {
  nuevoProducto: any = { nombre: '', categoria: '' };

//  categorias: { nombre: string, productos: { nombre: string, categoria: string }[] }[] = [
//     { nombre: 'Electrónica', productos: [{ nombre: 'Televisor', categoria: 'Electrónica' }, { nombre: 'Laptop', categoria: 'Electrónica' }] },
//     { nombre: 'Muebles', productos: [{ nombre: 'Sofá', categoria: 'Muebles' }, { nombre: 'Mesa', categoria: 'Muebles' }] }
// ];


  categorias: any[] = [
    {
        nombre: 'Electrónica',
        productos: [
            { nombre: 'Televisor' },
            { nombre: 'Laptop' }
        ]
    },
    {
        nombre: 'Muebles',
        productos: [
            { nombre: 'Sofá', precio:122, cantidad: 100, descripcion:'kjnkjnkkjnkjnknoiojoijojkm' },
            { nombre: 'Mesa' }
        ]
    }
];
  

}
