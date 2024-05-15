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
  saveData(): void {
     this.usuario = { name: 'John', age: 30, rol:'a'};
   
  }
  onSubmit(): void {
    if (this.miFormulario.valid) {
      this.saveData();
       if(this.usuario.rol == 'p'){
        this.router.navigate(['/particula']);
        this.getData();
       }
       else{
        // console.log('No existe el usuario')
       }
       
      // Aquí puedes realizar alguna acción antes de la redirección si es necesario
      // Cambia '/nueva-ventana' por la ruta a la nueva ventana
    }
  }

  getData(): void {
   
    
  }

  visible: boolean = false;
  miFormulario: FormGroup = new FormGroup({});
  usuarioNuevo: FormGroup =new FormGroup({})
  constructor(private formBuilder: FormBuilder, private router: Router,private clienteService: ClienteService ) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      username: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.usuarioNuevo= this.formBuilder.group({
      nombre:['', Validators.required],
      correo:['', [Validators.required, Validators.email]],
      contraseña:['', [Validators.required, Validators.minLength(8)]],
      validarContraseña:['',[Validators.required, Validators.minLength(8)]],
      
    })
  }


  showDialog() {
      this.visible = true;
}

   AgregarUsuario(){
    const nuevoUsuario = {
      correo:this.usuarioNuevo.controls['correo'].value,
      nombre: this.usuarioNuevo.controls['nombre'].value,
      rol: 'p',
      contrasena:this.usuarioNuevo.controls['contraseña'].value
    };
    
   }

   cerrar(){
    this.visible=false
    this.usuarioNuevo.reset();

   }


   iniciarsecion(){
    const correo=this.miFormulario.controls['username'].value;
    const contrasenal= this.miFormulario.controls['password'].value;
    this.clienteService.getDatosCliente(correo).subscribe(
      (data: any[]) => {
        if(data !== null){
          this.datosUsuario = data;
          console.log(this.datosUsuario);
          let contrasena: string = this.datosUsuario.contrasena;
         if(contrasena===contrasenal){
          let rol: string = this.datosUsuario.rol;
          console.log(rol);
            if(rol==='c' || rol==='C'){
              
              this.router.navigate(['/particula']);
            }else{
              this.router.navigate(['/administrador']);
            }
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

   
}
