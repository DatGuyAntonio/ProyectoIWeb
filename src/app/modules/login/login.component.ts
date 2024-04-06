import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormsModule, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
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
 
  onSubmit(): void {
    if (this.miFormulario.valid) {
      // Aquí puedes realizar alguna acción antes de la redirección si es necesario
      this.router.navigate(['/particula']); // Cambia '/nueva-ventana' por la ruta a la nueva ventana
    }
  }
  visible: boolean = false;
  miFormulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
