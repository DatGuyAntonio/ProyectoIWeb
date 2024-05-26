import { Component, HostListener} from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';
import { FileUploadModule} from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';
import { CarritoService } from '../../Services/Carrito/carrito.service';
import { ClienteService } from '../../Services/cliente/cliente.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PasswordModule } from 'primeng/password';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
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
            ToastModule,
            ConfirmDialogModule, CommonModule,
            ToastModule, FormsModule, PasswordModule, ReactiveFormsModule,InputTextModule ],
            providers: [ MessageService],
  templateUrl: './particula.component.html',
  styleUrl: './particula.component.scss',
})
export class ParticulaComponent {

  isHeaderFixed = false; // Esta propiedad determina si el encabezado es fijo
 ismenuFixed=false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.ismenuFixed=window.pageYOffset > 200;
    this.isHeaderFixed = window.pageYOffset > 200;
  }
  direccionesU: any[] = [];
  position: string = 'Left';
  visible: boolean = false;
  positionUser: string = 'Rigth';
  visibleUser: boolean = false;
  sidebarVisible2: boolean = false;
  categorias:any;
  rol: any;
  carrito:any
  usuario:any
  cambioContra: FormGroup =new FormGroup({});
  visibleCContra: boolean = false;
  constructor(private formBuilder: FormBuilder, public router: Router, private carritoService: CarritoService,  private messageService: MessageService, private clienteService:ClienteService) {
    this.carritoService.carritoActual.subscribe(mueblesCarrito => {
      // Haz algo con mueblesCarrito
     this.carrito=mueblesCarrito;
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

    this.cambioContra = this.formBuilder.group({
      contraseña:['', [Validators.required, Validators.minLength(8)]],
      validarContraseña:['',[Validators.required, Validators.minLength(8)]]
    });

    this.categorias = [
      { label: 'Camas' },
      { label: 'Mesas de noche' },
      { label: 'Armarios' },
      { label: 'Escritorios' },
      { label: 'Sillas' },
      { label: 'Mesas de centro' }
    ];
    let usuarioString = localStorage.getItem('usuario');

    if (!usuarioString) {
      this.router.navigate(['login']);
    } else {
      const usuario = JSON.parse(usuarioString);
      this.rol = usuario.rol;
      this.usuario=usuario;
      console.log(this.rol);
      this.router.navigate(['particula', 'muebles']);
    }
  }   
    
  pagos(){
    if(this.carrito.length >0){
      this.router.navigate(['particula', 'pagos']);
      this.visible=false;
      this.visible2=false;
      this.sidebarVisible2=false;
      this.visible3=false;
    }else{
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Necesita tener productos en el carrito', life: 3000 });

    }
   
  }
    
  
    onUpload(event: UploadEvent) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  visible2: boolean = false;

  showDialog2() {

    console.log(this.usuario);
      this.visible2 = true;
      this.direcciones()
  }


  visible3: boolean = false;

  showDialog3() {
      console.log(this.carrito);
      this.visible3 = true;
  }

  LogOut(){
    

    this.sidebarVisible2=false;
    
    let usuario = localStorage.getItem('usuario');
    // Verifica si los datos del usuario existen
    if (usuario !== null) {
        Swal.fire({
            title: "¿Desea cerrar sesión?",
            text: "“¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText:"NO",
            confirmButtonText: "SI"
        }).then((result) => {
            if (result.isConfirmed) {
                // Borra los datos del usuario del localStorage
                localStorage.removeItem('usuario');

                // Redirige al usuario al login
                this.router.navigate(['/login']);

                Swal.fire({
                    
                    text: "Session cerrada con exito.",
                    icon: "success"
                });
            }
            else{
              this.sidebarVisible2=true;
            }
        });
    }
}

regresar(){
  this.router.navigate(['particula', 'muebles']);
}
direcciones(){

  let correo = this.usuario.correo;
  this.clienteService.getDirecciones(correo).subscribe(
    data => {
      this.direccionesU=data;
        
      console.log(this.direccionesU);
    },
    error => {
     
    }
  );
}
cambiarContra(){
  this.visibleCContra=true
}

}