import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'
import { routes } from '../../../app/app.routes';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  providers: [provideRouter(routes)],
})
export class ParticulaModule { }
