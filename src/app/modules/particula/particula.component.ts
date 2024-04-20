import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';
import { FileUploadModule} from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-particula',
  standalone: true,
  imports: [ButtonModule,
            DialogModule,
            SidebarModule,
            TabMenuModule,
            FileUploadModule,
            ToastModule],
  templateUrl: './particula.component.html',
  styleUrl: './particula.component.scss'
})
export class ParticulaComponent {
  position: string = 'Left';
  visible: boolean = false;
  positionUser: string = 'Rigth';
  visibleUser: boolean = false;
  sidebarVisible2: boolean = false;
  messageService: any;
  constructor(private router: Router) {}
    showDialog(position: string) {
        this.position = position;
        this.visible = true;
    }
    showDialogUser(positionUser: string) {
      this.positionUser = positionUser;
      this.visibleUser = true;
  }
  items: MenuItem[] = [
    { label: 'Camas' },
    { label: 'Mesas de noche' },
    { label: 'Armarios' },
    { label: 'Escritorios' },
    { label: 'Sillas' },
    { label: 'Mesas de centro' }
];
activeItem: MenuItem | undefined;
    ngOnInit() {
        this.items ;
        
          this.activeItem = this.items[0]; // Selecciona el primer item por defecto
          this.router.navigate(['particula', 'camas']);
    }
    onActiveItemChange(event: MenuItem) {
      if (this.activeItem !== event) {
        this.activeItem = event;
        this.cuerpo(this.activeItem?.label);
      }
    }

    
  
cuerpo(label: string | undefined) {
  switch (label) {
    case 'Camas':
      console.log('Se seleccionó la opción "Camas"');
      this.router.navigate(['particula', 'camas']); // Navegar a la ruta hija 'particula/camas'
      break;
    case 'Mesas de noche':
      console.log('Se seleccionó la opción "Mesas de noche"');
      this.router.navigate(['particula', 'mesasNoche']);
      // Agrega aquí la lógica específica para la opción "Mesas de noche"
      break;
    case 'Armarios':
      console.log('Se seleccionó la opción "Armarios"');
      this.router.navigate(['particula', 'armario']);
      // Agrega aquí la lógica específica para la opción "Armarios"
      break;
    case 'Escritorios':
      console.log('Se seleccionó la opción "Escritorios y sillas de trabajo"');
      this.router.navigate(['particula', 'escritorio']);
      // Agrega aquí la lógica específica para la opción "Escritorios y sillas de trabajo"
      break;
    case 'Sillas':
      console.log('Se seleccionó la opción "Sillas y sillones"');
      this.router.navigate(['particula', 'sillas']);

      // Agrega aquí la lógica específica para la opción "Sillas y sillones"
      break;
    case 'Mesas de centro':
      console.log('Se seleccionó la opción "Mesas de centro"');
      this.router.navigate(['particula', 'mesasCentro']);

      // Agrega aquí la lógica específica para la opción "Mesas de centro"
      break;
    default:
      console.log('No se reconoce la opción seleccionada');
  }
}
    onUpload(event: UploadEvent) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  
}
