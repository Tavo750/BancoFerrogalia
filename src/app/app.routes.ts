import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AbrirCuentaComponent } from './components/header/components/abrir-cuenta/abrir-cuenta.component';
import { SimuladorPlazoFijoComponent } from './pages/simulador-plazo-fijo/simulador-plazo-fijo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'abrir-cuenta', component: AbrirCuentaComponent },
  { path: 'simulador-plazo-fijo', component: SimuladorPlazoFijoComponent },
  { path: '**', redirectTo: '' }
];
