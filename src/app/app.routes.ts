import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { ParticulaComponent } from './modules/particula/particula.component';
import { CamasComponent } from './modules/particula/cuerpo-particular/camas/camas.component';
import { MesasNocheComponent} from './modules/particula/cuerpo-particular/mesas-noche/mesas-noche.component';
import { ArmarioComponent } from './modules/particula/cuerpo-particular/armario/armario.component';
import { EscritorioComponent } from './modules/particula/cuerpo-particular/escritorio/escritorio.component';
import { MesasCentroComponent } from './modules/particula/cuerpo-particular/mesas-centro/mesas-centro.component';
import { SillasComponent } from './modules/particula/cuerpo-particular/sillas/sillas.component';
import { AdministradorComponent } from './modules/administrador/administrador.component';
import { AlmacenComponent } from './modules/administrador/Cuerpo-Administrador/almacen/almacen.component';
import { MensjaesComponent } from './modules/administrador/Cuerpo-Administrador/mensjaes/mensjaes.component';
import { PedidosComponent } from './modules/administrador/Cuerpo-Administrador/pedidos/pedidos.component';
import { UsuariosComponent } from './modules/administrador/Cuerpo-Administrador/usuarios/usuarios.component';
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
          path: 'camas',
          component: CamasComponent,
          loadChildren: () => import('./modules/particula/cuerpo-particular/camas/camas.module').then((m) => m.CamasModule)
        },
        {
          path: 'mesasNoche',
          component: MesasNocheComponent,
          loadChildren: () => import('./modules/particula/cuerpo-particular/mesas-noche/mesas-noche.module').then((m) => m.MesasNocheModule)
        },
        {
          path: 'armario',
          component: ArmarioComponent,
          loadChildren: () => import('./modules/particula/cuerpo-particular/armario/armario.module').then((m) => m.ArmarioModule)
        },
        {
          path: 'escritorio',
          component: EscritorioComponent,
          loadChildren: () => import('./modules/particula/cuerpo-particular/escritorio/escritorio.module').then((m) => m.EscritorioModule)
        },
        {
          path: 'mesasCentro',
          component: MesasCentroComponent,
          loadChildren: () => import('./modules/particula/cuerpo-particular/mesas-centro/mesas-centro.module').then((m) => m.MesasCentroModule)
        },
        {
          path: 'sillas',
          component: SillasComponent,
          loadChildren: () => import('./modules/particula/cuerpo-particular/sillas/sillas.module').then((m) => m.SillasModule)
        }
        // Puedes agregar más rutas hijas aquí si es necesario
      ]
    },
    {
      path: '', // Ruta vacía
      redirectTo: '/home', // Redirige al componente LoginComponent
      pathMatch: 'full' // La ruta debe coincidir exactamente con el path vacío
    }
]