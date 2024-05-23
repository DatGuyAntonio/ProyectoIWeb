import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter  } from '@angular/core';
import { FileUploadModule} from 'primeng/fileupload';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../../../Services/Carrito/carrito.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MueblesService } from '../../../../Services/muebles/muebles.service';
import { TabMenuModule } from 'primeng/tabmenu';
@Component({
  selector: 'app-camas',
  standalone: true,
  imports: [DividerModule, FileUploadModule,CommonModule,PanelModule,InputNumberModule,FormsModule, ToastModule, TabMenuModule],
  providers: [ MessageService],
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
 verContendio =true;
 VerResultado=false;
 constructor(private carritoService: CarritoService, private messageService: MessageService, private muebleService :MueblesService ) { }
 
  ngOnInit(){

    
this.cargaMuebles();
 
 
     
  //  this.productos = [
     
      
  //   ];

    console.log(this.productos)

  }


  cargaMuebles(){
  
    this.muebleService.getMuebles() .subscribe(
      data => {
        this.productos = data;
        console.log(this.productos)
      },
      error => {
        console.error('Error al obtener los datos:', error);
      }
    );
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
          nombre:producto.nombre ,
            sku: producto.codigo,
            cantidad: producto.cantidadSeleccionada,
            precio: producto.precio
        };

        this.mueblesCarrito.push(mueble);
        this.enviarDatos();
        producto.cantidadSeleccionada=0;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Producto Agregado con exito al carrito', life: 3000});

    } else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'No se puede duplicar el mismo producto', life: 3000 });
      producto.cantidadSeleccionada=0;
    }
} else {
  
  this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Favor de agregar cantidad al producto', life: 3000 });
}


 
}

enviarDatos() {
  this.carritoService.actualizarCarrito(this.mueblesCarrito);
  console.log("se Actualizo el carrito ")
}

mostrarResultadosIa(){
  this.verContendio=false;
  this.VerResultado=true;
}

}
