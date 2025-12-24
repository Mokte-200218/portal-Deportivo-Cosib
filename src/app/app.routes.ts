import { Routes } from '@angular/router';
import { LoginComponent } from './IU/login/login.component';
import { DeportesComponent } from './IU/deporte/deporte.component';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Iniciar sesion' },

  { path: 'deportes', component: DeportesComponent, title: 'Deportes'},


  { path: '**', redirectTo: 'login' }
];
