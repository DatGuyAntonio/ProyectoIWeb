import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../../../Services/cliente/cliente.service';
import { CarritoService } from '../../../../Services/Carrito/carrito.service';
import { ButtonModule } from 'primeng/button';
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
  metodosDePago: any[] = [
    { nombre: 'Tarjeta de Crédito', descripcion: 'Visa, MasterCard, American Express' },
    { nombre: 'PayPal', descripcion: 'Paga fácilmente usando tu cuenta de PayPal' },
    { nombre: 'Transferencia Bancaria', descripcion: 'Transferencia directa desde tu banco' }
  ];
  constructor( private clienteService:ClienteService,private carritoService: CarritoService) { 
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
              value: '100.00'
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Transacción completada por ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-button-container');
  });
}

}
