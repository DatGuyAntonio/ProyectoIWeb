
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { FormGroup, FormsModule, FormControl, FormBuilder, Validators } from '@angular/forms';
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LoginComponent,
    ButtonModule,
    FormsModule
  
  ],
  exports: [
    LoginComponent // Exporta LoginComponent si es necesario usarlo fuera de este módulo
  ]
})
export class LoginModule { }