import { Component,  } from '@angular/core';
import { VentaService } from '../../../../Services/venta/venta.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-venta',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.scss'
})
export class VentaComponent {
   ventas:any
   constructor(private ventaService:VentaService){};

  ngOnInit() {

   this.cargaVentas();
  }

  cargaVentas(){
    this.ventaService.getVentas().subscribe(
      (data: any) => {
        console.log(data);

        this.ventas=data;
      },
      (error: any) => {
        // Tu lógica para manejar el error
      }
    );
  }


}
