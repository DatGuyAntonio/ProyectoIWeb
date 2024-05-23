import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { ParticulaComponent } from './modules/particula/particula.component';
import { CamasComponent } from './modules/particula/cuerpo-particular/muebles/camas.component';

import { AdministradorComponent } from './modules/administrador/administrador.component';
import { AlmacenComponent } from './modules/administrador/Cuerpo-Administrador/almacen/almacen.component';
import { MensjaesComponent } from './modules/administrador/Cuerpo-Administrador/mensjaes/mensjaes.component';
import { PedidosComponent } from './modules/administrador/Cuerpo-Administrador/pedidos/pedidos.component';
import { UsuariosComponent } from './modules/administrador/Cuerpo-Administrador/usuarios/usuarios.component';
import { PagosComponent } from './modules/particula/cuerpo-particular/pagos/pagos.component';
export const routes: Routes = [
    {
      path: 'login', 
      component: LoginComponent,
      data: { title: 'Login' },
      loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
    },{
    path: 'home', 
    component: HomeComponent,
    data: { title: 'component' },
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    },{
    path: 'nosotros', 
    component:NosotrosComponent ,
    data: { title: 'component' },
    loadChildren: () => import('./modules/nosotros/nosotros.module').then((m) => m.NosotrosModule),
    },{
    path: 'contacto', 
    component:ContactoComponent ,
    data: { title: 'component' },
    loadChildren: () => import('./modules/contacto/contacto.module').then((m) => m.ContactoModule),
    },{
      path: 'administrador', 
      component:AdministradorComponent ,
      data: { title: 'component' },
      children: [
        {
          path: 'almacen',
          component: AlmacenComponent,
          loadChildren: () => import('./modules/administrador/Cuerpo-Administrador/almacen/almacen.module').then((m) => m.AlmacenModule)
        },
        {
          path: 'mensajes',
          component: MensjaesComponent,
          loadChildren: () => import('./modules/administrador/Cuerpo-Administrador/mensjaes/mensjaes.module').then((m) => m.MensjaesModule)
        },
        {
          path: 'pedidos',
          component: PedidosComponent,
          loadChildren: () => import('./modules/administrador/Cuerpo-Administrador/pedidos/pedidos.module').then((m) => m.PedidosModule)
        },
        {
          path: 'usuarios',
          component: UsuariosComponent,
          loadChildren: () => import('./modules/administrador/Cuerpo-Administrador/usuarios/usuarios.module').then((m) => m.UsuariosModule)
        },
      
      ]

      },{
      path: 'particula', 
      component: ParticulaComponent,
      data: { title: 'component' },
      children: [
        {
          path: 'muebles',
          component: CamasComponent,
          loadChildren: () => import('./modules/particula/cuerpo-particular/muebles/camas.module').then((m) => m.CamasModule)
        },
        {
          path: 'pagos',
          component: PagosComponent,
          loadChildren: () => import('./modules/particula/cuerpo-particular/pagos/pagos.module').then((m) => m.PagosModule)
        }
      ]
    },
    {
      path: '', // Ruta vacía
      redirectTo: '/home', // Redirige al componente LoginComponent
      pathMatch: 'full' // La ruta debe coincidir exactamente con el path vacío
    }
]