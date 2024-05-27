import { Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.scss'
})
export class AdministradorComponent {
  items: MenuItem[] = [
    { label: 'Pedidos' },
    { label: 'Usuarios' },
    { label: 'Mensajes' },
    { label: 'Almacen' }
];
activeItem: MenuItem | undefined;
constructor(private router: Router) {}
    ngOnInit() {
        this.items ;
        
          this.activeItem = this.items[0]; // Selecciona el primer item por defecto
          this.router.navigate(['administrador', 'pedidos']);
    }
    onActiveItemChange(event: MenuItem) {
      if (this.activeItem !== event) {
        this.activeItem = event;
        this.cuerpo(this.activeItem?.label);
      }
    }

     
cuerpo(label: string | undefined) {
  switch (label) {
    case 'Pedidos':
      
      this.router.navigate(['administrador', 'pedidos']); 
      break;
    case 'Usuarios':
      
      this.router.navigate(['administrador', 'usuarios']);
      
      break;
    case 'Mensajes':
  
      this.router.navigate(['administrador', 'mensajes']);
     
      break;
    case 'Almacen':
     
      this.router.navigate(['administrador', 'almacen']);
    
      break;
  
    default:
      this.router.navigate(['administrador', 'pedidos']);
  }
}



LogOut(){
    
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
      
      });
  }
}
}
