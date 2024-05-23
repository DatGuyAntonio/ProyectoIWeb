import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './modules/login/login.module';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule  // HttpClientModule importado correctamente
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Agregar el CUSTOM_ELEMENTS_SCHEMA
  ],
 
})
export class AppModule { }
