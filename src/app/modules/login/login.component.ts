import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormsModule, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from '../../Services/cliente/cliente.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,
    DialogModule,
    CheckboxModule,
    PasswordModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 usuario:any
 datosUsuario: any;
  
  

  getData(): void {
   
    
  }

  visible: boolean = false;
  visible2: boolean = false;
  miFormulario: FormGroup = new FormGroup({});
  usuarioNuevo: FormGroup =new FormGroup({});
  cambioContra: FormGroup =new FormGroup({});
  constructor(private formBuilder: FormBuilder, private router: Router,private clienteService: ClienteService ) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      username: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.usuarioNuevo= this.formBuilder.group({
      nombre:['', Validators.required],
      correo:['', [Validators.required, Validators.email]],
      celular:['', [Validators.required,  Validators.minLength(10), Validators.maxLength(10)]],
      cp:['', [Validators.required,  Validators.minLength(5), Validators.maxLength(5)]],
      calle:['', [Validators.required]],
      colonia:['', [Validators.required]],
      numCasa:['', [Validators.required]],
      contraseña:['', [Validators.required, Validators.minLength(8)]],
      validarContraseña:['',[Validators.required, Validators.minLength(8)]],
      
    })
    this.cambioContra = this.formBuilder.group({
      correo:['', [Validators.required, Validators.email]],
      contraseña:['', [Validators.required, Validators.minLength(8)]],
      validarContraseña:['',[Validators.required, Validators.minLength(8)]]
    });
  }


  showDialog() {
      this.visible = true;
}

   AgregarUsuario(){
    const nuevoUsuario = {
      correo: this.usuarioNuevo.controls['correo'].value ,
      contrasena: this.usuarioNuevo.controls['contraseña'].value ,
      nombre: this.usuarioNuevo.controls['nombre'].value,
      celular: this.usuarioNuevo.controls['celular'].value,
      domicilio: {
        calle: this.usuarioNuevo.controls['calle'].value,
        colonia: this.usuarioNuevo.controls['colonia'].value,
        cp: this.usuarioNuevo.controls['cp'].value ,
        num_Exterior: this.usuarioNuevo.controls['numCasa'].value
      }
    };
     this.clienteService.postClienteN(nuevoUsuario).subscribe(
      (data:any)=>{
         if(data===false){
           this.visible=false;
           this.usuarioNuevo.reset();
          
          Swal.fire({
                    
            text: "Se creo con exito su cuenta.",
            icon: "success"
        });
         }
      },
      error => {
        console.error('Error al obtener los datos:', error);
      })
    
   }

   cerrar(){
    this.visible=false
    this.usuarioNuevo.reset();

    this.visible2=false;
    this.cambioContra.reset();

   }


   iniciarsecion(){
    const correo=this.miFormulario.controls['username'].value;
    const contrasenal= this.miFormulario.controls['password'].value;
    this.clienteService.getDatosCliente(correo).subscribe(
      (data: any[]) => {
        if(data !== null){
          this.datosUsuario = data;
          
          let contrasena: string = this.datosUsuario.contrasena;
         if(contrasena===contrasenal){
          let rol: string = this.datosUsuario.rol;
         
            if(rol==='c' || rol==='C' || rol==='e' || rol==='E'){
              
              this.router.navigate(['/particula']);
            }else{
              this.router.navigate(['/administrador']);
            }

            localStorage.setItem('usuario', JSON.stringify(this.datosUsuario));
         }else{
          console.log('invalida papu')
         }
        }
      },
      error => {
        console.error('Error al obtener los datos:', error);
      }
    );
    

    

   }

cambiarContra(){
  this.visible2=true;


}
   
}
