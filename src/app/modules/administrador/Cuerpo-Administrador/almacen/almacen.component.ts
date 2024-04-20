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
  

  agregarProducto() {
    // Aquí puedes agregar la lógica para guardar el nuevo producto
    console.log('Nuevo producto:', this.nuevoProducto);
    // Por simplicidad, solo lo mostramos por ahora
    this.categorias.find(categoria => categoria.nombre === this.nuevoProducto.categoria)?.productos.push(this.nuevoProducto);
    // Limpiamos el formulario después de agregar el producto
    this.nuevoProducto = { nombre: '', categoria: '' };
  }

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
            { nombre: 'Sofá' },
            { nombre: 'Mesa' }
        ]
    }
];
  

}
