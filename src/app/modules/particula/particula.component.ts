import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';
import { FileUploadModule} from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import { CarritoService } from '../../Services/Carrito/carrito.service';

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
  styleUrl: './particula.component.scss',
})
export class ParticulaComponent {

  isHeaderFixed = false; // Esta propiedad determina si el encabezado es fijo

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isHeaderFixed = window.pageYOffset > 200;
  }
  
  position: string = 'Left';
  visible: boolean = false;
  positionUser: string = 'Rigth';
  visibleUser: boolean = false;
  sidebarVisible2: boolean = false;
  messageService: any;
  constructor(private router: Router, private carritoService: CarritoService) {
    this.carritoService.carritoActual.subscribe(mueblesCarrito => {
      // Haz algo con mueblesCarrito
      console.log(mueblesCarrito);
    });
  }
    showDialog(position: string) {
        this.position = position;
        this.visible = true;
    }
    showDialogUser(positionUser: string) {
      this.positionUser = positionUser;
      this.visibleUser = true;
  }
 

    ngOnInit() {
        
          this.router.navigate(['particula', 'muebles']);
    }
   
    

    
  
    onUpload(event: UploadEvent) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  visible2: boolean = false;

  showDialog2() {

      this.visible2 = true;
  }


  visible3: boolean = false;

  showDialog3() {

      this.visible3 = true;
  }

  
}
