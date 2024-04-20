import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormsModule, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import{LoginService} from '../../Services/login/login.service'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,
    DialogModule,
    CheckboxModule,
    PasswordModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
   

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 usuario:any
  saveData(): void {
     this.usuario = { name: 'John', age: 30, rol:'a'};
    this.loginService.setItem('userData', this.usuario);
  }
  onSubmit(): void {
    if (this.miFormulario.valid) {
      this.saveData();
       if(this.usuario.rol == 'p'){
        this.router.navigate(['/particula']);
        this.getData();
       }
       else{
        console.log('No existe el usuario')
       }
       
      // Aquí puedes realizar alguna acción antes de la redirección si es necesario
      // Cambia '/nueva-ventana' por la ruta a la nueva ventana
    }
  }

  getData(): void {
    const userData = this.loginService.getItem('userData');
    console.log(userData);
  }

  visible: boolean = false;
  miFormulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  showDialog() {
      this.visible = true;
}
}
