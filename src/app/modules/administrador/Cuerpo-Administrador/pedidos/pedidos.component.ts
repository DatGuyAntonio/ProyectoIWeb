import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PedidoService } from '../../../../Services/pedido/pedido.service';
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {
pedidos:any
estados: { [key: string]: string } = {
  'p': 'Pendiente',
  'c': 'Completado',
  'e': 'En Proceso',
  'a': 'Cancelado'
};
  constructor( private pedidoService:PedidoService){

  }
  ngOnInit() {
    this.estados;
this.cargaPedidos();
  }

  cargaPedidos(){
  
    this.pedidoService.getpedidos().subscribe(
      (data:any)=>{
        this.pedidos=data;
      
      },
      error => {
        
      })
  }

}
