import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../../../Services/cliente/cliente.service';
import { CarritoService } from '../../../../Services/Carrito/carrito.service';
import { ButtonModule } from 'primeng/button';
import { VentaService } from '../../../../Services/venta/venta.service';
import Swal from 'sweetalert2';
declare var paypal: any;
@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.scss'
})
export class PagosComponent {
  
  usuario:any;
  carrito:any;
  direccionesU: any[] = [];
  total:any;
  lineaVenta: { codigo: string, precio: number, cantidad: number }[] = [];
  constructor( private clienteService:ClienteService,private carritoService: CarritoService, private ventaService:VentaService) { 
    this.carritoService.carritoActual.subscribe(mueblesCarrito => {
      // Haz algo con mueblesCarrito
     this.carrito=mueblesCarrito;
   
    });
  }
  ngOnInit() {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString);
      

    }
    this.direcciones();
   this.calculatotal();
 
    }

direcciones(){
  let correo = this.usuario.correo;
  this.clienteService.getDirecciones(correo).subscribe(
    data => {
      this.direccionesU=data;
        
     
    },
    error => {
     
    }
  );
}

loadPayPalButton() {
 
}

private addPayPalScript() {
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://www.paypal.com/sdk/js?client-id=Aa2pt08eBLg-HajcVSJdWH_vrs-cD6_FWMb-ZCpj8MMFMZrJ_hTLuaqX4sCJGioab2sVsLukm4bu5h04&currency=MXN';
    scriptElement.id = 'paypal-sdk';
    scriptElement.onload = resolve;
    document.body.appendChild(scriptElement);
  });
}

ngAfterViewInit() {
  this.addPayPalScript().then(() => {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: 'MXN',
              value: this.total
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
            this.venta();
        });
      }
    }).render('#paypal-button-container');
  });
}

calculatotal(){
  const totalReduce = this.carrito.reduce((acc: number, item: { cantidad: number; precio: number }) => {
    return acc + (item.cantidad * item.precio);
}, 0);
this.total=totalReduce;
console.log('Total usando reduce:', totalReduce);

 
}

venta(){
 console.log(1);
  this.lineaVenta = this.carrito.map((item: { sku: any; precio: any; cantidad: any; }) => ({
    codigo: item.sku,
    precio: item.precio,
    cantidad: item.cantidad
  }));
  
  console.log('lineaVenta:', this.lineaVenta);
  const bodyVenta={
    "correo": this.usuario.correo,
    "lineaVenta": 
     this.lineaVenta
    ,
    "total":this.total
  }
  
  console.log(bodyVenta);

  this.ventaService.postVenta(bodyVenta).subscribe(
    (data:any)=>{
       if(data===true){
        this.carritoService.resetearCarrito();
        Swal.fire({
          text: "Se creo con exito su pedido.",
          icon: "success"
      });
       }
    },
    error => {
      
    })

}

}
