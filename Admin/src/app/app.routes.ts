import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ListareproduccionComponent } from './components/listareproduccion/listareproduccion.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'canciones', component: ListareproduccionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
