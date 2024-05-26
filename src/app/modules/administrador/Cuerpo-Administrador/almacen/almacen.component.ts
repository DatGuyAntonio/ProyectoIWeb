import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { MueblesService } from '../../../../Services/muebles/muebles.service';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [CommonModule,TabViewModule,TableModule,DropdownModule,FormsModule],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.scss'
})
export class AlmacenComponent {
 muebles:any;
 categoriaSeleccionada: string = 'Todos';
categorias:any []=[]



//  categorias: { nombre: string, productos: { nombre: string, categoria: string }[] }[] = [
//     { nombre: 'Electrónica', productos: [{ nombre: 'Televisor', categoria: 'Electrónica' }, { nombre: 'Laptop', categoria: 'Electrónica' }] },
//     { nombre: 'Muebles', productos: [{ nombre: 'Sofá', categoria: 'Muebles' }, { nombre: 'Mesa', categoria: 'Muebles' }] }
// ];

constructor( private muebleService:MueblesService){

}

ngOnInit() {
  this.categorias = [
    { label: 'Todos'},
    { label: 'Cama'},
    { label: 'Armarios' },
    { label: 'Escritorios' },
    { label: 'Mesas' },
    { label: 'Sillas' }
];
  this.cargaMuebles();



}

  cargaMuebles(){
  
    this.muebleService.getMuebles() .subscribe(
      data => {
        this.muebles = data;
        console.log(this.muebles)
      },
      error => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }


  onCategoriaSeleccionada(event: any) {
     this.categoriaSeleccionada = event.value.label.toString(); // Convierte el valor a una cadena
    console.log('Categoría seleccionada:', this.categoriaSeleccionada);
    // Aquí puedes hacer lo que quieras con la categoría seleccionada
  } 
  
  filtro(){
   
  }
  

}
