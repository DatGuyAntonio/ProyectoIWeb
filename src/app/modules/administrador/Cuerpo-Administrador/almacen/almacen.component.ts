import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { MueblesService } from '../../../../Services/muebles/muebles.service';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SoloNumerosDirective } from '../../../../directives/solo-numeros.directive';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [CommonModule,TabViewModule,TableModule,DropdownModule,FormsModule,ButtonModule, DialogModule, ReactiveFormsModule,ToastModule, ConfirmDialogModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.scss',
  
})
export class AlmacenComponent {
 categorias!: any[];
  muebles!: any[];
  mueblesFiltrados!: any[];
  categoriaSeleccionada!: string;
 muebleCambioP:any;
 muebleCambioS:any;
visible:boolean=false;
visibleE:boolean=false;
  precioFormControl!: FormControl;
  stockFormControl!: FormControl;
//  categorias: { nombre: string, productos: { nombre: string, categoria: string }[] }[] = [
//     { nombre: 'Electrónica', productos: [{ nombre: 'Televisor', categoria: 'Electrónica' }, { nombre: 'Laptop', categoria: 'Electrónica' }] },
//     { nombre: 'Muebles', productos: [{ nombre: 'Sofá', categoria: 'Muebles' }, { nombre: 'Mesa', categoria: 'Muebles' }] }
// ];

constructor( private confirmationService: ConfirmationService, private messageService: MessageService, private muebleService:MueblesService){

}

ngOnInit() {
  this.precioFormControl = new FormControl('', [Validators.pattern('[0-9]+'), Validators.maxLength(4)]);
  this.stockFormControl = new FormControl('', [Validators.pattern('[0-9]+'), Validators.maxLength(4)]);
  this.categorias = [
    { label: 'Todos', value: 'Todos' },
    { label: 'Cama', value: 'Cama' },
    { label: 'Armarios', value: 'Armarios' },
    { label: 'Escritorios', value: 'Escritorios' },
    { label: 'Mesas de centro', value: 'Centro' },
    { label: 'Mesas de noche', value: 'Noche' },
    { label: 'Sillas', value: 'Sillas' }
  ];


  this.cargaMuebles();

  this.categoriaSeleccionada = 'Todos';
}

  cargaMuebles(){
  
    this.muebleService.getMuebles() .subscribe(
      data => {
        this.muebles = data;
   
        this.mueblesFiltrados = this.muebles;
      },
      error => {
       
      }
    );
  }


  onCategoriaSeleccionada(event: any) {
     this.categoriaSeleccionada = event.value.label.toString(); // Convierte el valor a una cadena

    // Aquí puedes hacer lo que quieras con la categoría seleccionada
  } 
  
  filtrarPorCategoria() {
    this.onCategoriaSeleccionada
    if (this.categoriaSeleccionada === 'Todos') {
      this.mueblesFiltrados = this.muebles;
  
    } else {
      this.mueblesFiltrados = this.muebles.filter(mueble => mueble.categoria === this.categoriaSeleccionada);
    }


  }

  CPrecio(muebleFiltrado: any){
    this.visible=true;
    this.muebleCambioP=muebleFiltrado;

  }
  CStock(muebleFiltrado: any){
    this.visibleE=true;
    this.muebleCambioS=muebleFiltrado;


  }

  CambiarPrecio(){
    const mueblebody={
      "codigo":this.muebleCambioP.codigo,
      "descripcion": this.muebleCambioP.descripcion,
      "categoria":this.muebleCambioP.categoria,
      "subCategoria": this.muebleCambioP.subCategoria,
      "img": this.muebleCambioP.img,
      "precio": this.precioFormControl.value,
      "cantidad": this.muebleCambioP.cantidad
    }
    const codigo= this.muebleCambioP.codigo
  
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: '¿Desea eliminar a este usuario?.',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {
        if (this.precioFormControl.dirty && this.precioFormControl.value !== null && this.precioFormControl.value !== undefined) {
          this.muebleService.putMueblesP(codigo,mueblebody).subscribe(
            data => {
              if (data !== null && data !== undefined) {
              
                  this.precioFormControl.reset();
                  this.precioFormControl.markAsTouched();
                  this.visible=false;
                  this.messageService.add({ severity: 'success', summary: 'Confirmacion', detail: 'Se modifico  con exito el precio.', life: 3000 });
                  
                  this.cargaMuebles()
              }
            },
            error => {
             
            }
          );
       
      }else{
        this.messageService.add({ severity: 'info', summary: 'Informativo', detail: 'Debe modificar el precio', life: 3000 });
       
      }

        
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Cancelacion', detail: 'Ha cancelado el proceso', life: 3000 });
      }
  });
   
  }

  
  CambiarStock(){
    const mueblebody={
      "codigo":this.muebleCambioS.codigo,
      "descripcion": this.muebleCambioS.descripcion,
      "categoria":this.muebleCambioS.categoria,
      "subCategoria": this.muebleCambioS.subCategoria,
      "img": this.muebleCambioS.img,
      "precio":this.muebleCambioS.precio ,
      "cantidad": this.stockFormControl.value
    }
    
    const codigo= this.muebleCambioS.codigo
 
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: '¿Desea eliminar a este usuario?.',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {
    if (this.stockFormControl.dirty && this.stockFormControl.value !== null && this.stockFormControl.value !== undefined) {
     
            this.muebleService.putMueblesS(codigo,mueblebody).subscribe(
        data => {
          if (data !== null && data !== undefined) {
             
  
              this.cargaMuebles()
          }
        },
        error => {
          
        }
      );
      
   
  }else{

    this.messageService.add({ severity: 'info', summary: 'Informativo', detail: 'Debe modificar el Stock', life: 3000 });
   
  }
    
},
reject: () => {
    this.messageService.add({ severity: 'error', summary: 'Cancelacion', detail: 'Ha cancelado el proceso', life: 3000 });
}
});

  }

  desMueble(codigo:any){
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: '¿Desea eliminar a este usuario?.',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {

    this.muebleService.putMueblesDes(codigo).subscribe(
      data => {
        if (data !== null && data !== undefined) {
            

            this.cargaMuebles()
        }
      },
      error => {
        
      }
    );
  },
  reject: () => {
      this.messageService.add({ severity: 'error', summary: 'Cancelacion', detail: 'Ha cancelado el proceso', life: 3000 });
  }
  });
  }
}
