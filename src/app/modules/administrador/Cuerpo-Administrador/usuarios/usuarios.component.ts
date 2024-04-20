import { Component } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableFilterEvent } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TableModule,CommonModule, ButtonModule, DialogModule,DropdownModule,InputTextModule,ToastModule,ConfirmDialogModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  // products!: Product[];
  visible:boolean=false;
  usuarios: any[] = []; 
  usuariosFiltrados: any[] = [];
  cities:any[]=[]
  cols: any[] = [  // Definición de columnas de la tabla
  { header: 'Nombre', field: 'nombre' },
  { header: 'Correo', field: 'correo' },
  { header: 'Teléfono', field: 'telefono' },
  { header: 'Rol', field: 'rol' },
  { header: 'Dirección', field: 'direccion'}
];

constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
  ngOnInit() {
   
this.cargaUsuario();
this.cities = [
  { name: 'Empresa', code: 'E' },
  { name: 'Particular', code: 'P' },
  { name: 'Administrador', code: 'A' }
];
 
}


cargaUsuario(){
  this.usuarios = [
    {
      nombre: 'Juan',
      correo: 'juan@example.com',
      telefono: '1234567890',
      rol: 'Administrador',
      direccion: 'Calle Principal 123'
    },
    {
      nombre: 'María',
      correo: 'maria@example.com',
      telefono: '9876543210',
      rol: 'Usuario',
      direccion: 'Avenida Secundaria 456'
    },
    // Puedes agregar más usuarios según sea necesario
  ];
}

applyFilter(event: any, field: string) {
  const searchText = event.target.value.toLowerCase();
  this.usuariosFiltrados = this.usuarios.filter(usuario =>
    usuario[field].toLowerCase().includes(searchText)
  );
}
isHTMLInputElement(target: EventTarget | null): target is HTMLInputElement {
  return target instanceof HTMLInputElement;
}

showDialog(){
  this.visible=true;
}


confirm() {
  this.confirmationService.confirm({
      header: 'Confirmation',
      message: '¿Desea eliminar a este usuario?.',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-sm',
      acceptButtonStyleClass: 'p-button-outlined p-button-sm',
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmacion', detail: 'Se elimino con exito', life: 3000 });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Cancelacion', detail: 'Ha cancelado el proceso', life: 3000 });
      }
  });
}



}
