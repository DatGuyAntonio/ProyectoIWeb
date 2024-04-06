import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { ParticulaComponent } from './modules/particula/particula.component';
import { CamasComponent } from './modules/particula/cuerpo-particular/camas/camas.component';
import { MesasNocheComponent} from './modules/particula/cuerpo-particular/mesas-noche/mesas-noche.component';
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