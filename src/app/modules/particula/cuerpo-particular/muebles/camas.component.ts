import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter  } from '@angular/core';
import { FileUploadModule} from 'primeng/fileupload';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../../../Services/Carrito/carrito.service';
@Component({
  selector: 'app-camas',
  standalone: true,
  imports: [DividerModule, FileUploadModule,CommonModule,PanelModule,InputNumberModule,FormsModule],
  templateUrl: './camas.component.html',
  styleUrl: './camas.component.scss'
})
export class CamasComponent {

  selectedImage: string | ArrayBuffer | null = null;
  mostrarSubirImagen: boolean = false;
  categorias:any[]=[];
 productos:any[]=[];
 cantidadSeleccionada: number=0;
 mueblesCarrito: { sku: string, cantidad: number, precio: number }[] = [];
 constructor(private carritoService: CarritoService) { }
 
  ngOnInit(){
    this.categorias = [
      { label: 'Camas' },
      { label: 'Mesas de noche' },
      { label: 'Armarios' },
      { label: 'Escritorios' },
      { label: 'Sillas' },
      { label: 'Mesas de centro' }
    ];
    
   this.productos = [
      { nombre: 'Producto 1',codigo:'SKU12345',categoria:'cama', precio: 20.00, cantidad: 10, descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus nec felis eleifend, sit amet lobortis nisl vehicula.'},
      { nombre: 'Producto 2',codigo:'SKU12345', categoria:'Cama',precio: 25.00, cantidad: 15,descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus nec felis eleifend, sit amet lobortis nisl vehicula.' },
      { nombre: 'Producto 3',codigo:'SKU12345', categoria:'Cama',precio: 25.00, cantidad: 15,descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus nec felis eleifend, sit amet lobortis nisl vehicula.' },
      { nombre: 'Producto 4',codigo:'SKU12345', categoria:'Cama',precio: 25.00, cantidad: 15,descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus nec felis eleifend, sit amet lobortis nisl vehicula.' },
      { nombre: 'Producto 5',codigo:'SKU12345', categoria:'Cama',precio: 25.00, cantidad: 15,descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus nec felis eleifend, sit amet lobortis nisl vehicula.' },
      { nombre: 'Producto 6',codigo:'SKU12345', categoria:'Cama', precio: 25.00, cantidad: 15,descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus nec felis eleifend, sit amet lobortis nisl vehicula.' },
      // Agrega más objetos de producto según sea necesario
    ];

  }
  onFileSelected(event: any): void {
    // Verificar si se seleccionó un archivo de imagen
    if (event.files && event.files.length > 0) {
      const file = event.files[0];

      // Leer el archivo como un objeto de URL
      const reader = new FileReader();
      reader.onload = () => {
        // Actualizar la vista previa con la URL de la imagen
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  resetPreview(): void {
    // Restablecer la vista previa de la imagen y permitir subir una nueva imagen
    this.selectedImage = null;
    const fileUploadInput = document.getElementById('fileUploadInput') as HTMLInputElement;
    if (fileUploadInput) {
      fileUploadInput.value = ''; // Limpiar la selección de archivo
    }
  }

  mostrarElementoSubirImagen(): void {
    this.mostrarSubirImagen = true;

  
}

agregarMueble(producto: any) {
  if(producto.cantidadSeleccionada > 0){
    // Busca si el SKU ya existe en mueblesCarrito
    const existeSKU = this.mueblesCarrito.some(mueble => mueble.sku === producto.codigo);

    // Si el SKU no existe, agrega el nuevo mueble
    if(!existeSKU) {
        const mueble = {
            sku: producto.codigo,
            cantidad: producto.cantidadSeleccionada,
            precio: producto.precio
        };

        this.mueblesCarrito.push(mueble);
        this.enviarDatos();
    } else {
        console.log("El producto con este SKU ya ha sido agregado al carrito");
    }
} else {
    console.log("No se puede agregar un producto sin cantidad");
}


 
}

enviarDatos() {
  this.carritoService.actualizarCarrito(this.mueblesCarrito);
  console.log("se Actualizo el carrito ")
}

}
