import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AbrirCuentaComponent } from './components/header/components/abrir-cuenta/abrir-cuenta.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'abrir-cuenta', component: AbrirCuentaComponent },
  { path: '**', redirectTo: '' }
];
