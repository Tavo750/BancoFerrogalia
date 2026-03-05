import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-simulador-plazo-fijo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './simulador-plazo-fijo.component.html',
  styleUrl: './simulador-plazo-fijo.component.scss'
})
export class SimuladorPlazoFijoComponent {
  monto: number = 300;
  moneda: 'soles' | 'dolares' = 'soles';
  plazo: number = 12; // meses
  tipoplazo: 'meses' | 'anos' = 'meses';

  tasaTREA = {
    soles: 6,     // 6% para soles
    dolares: 4    // 4% para dólares
  };

  plazosDisponibles = [
    { valor: 3, tipo: 'meses' as const, label: '3 meses' },
    { valor: 6, tipo: 'meses' as const, label: '6 meses' },
    { valor: 9, tipo: 'meses' as const, label: '9 meses' },
    { valor: 12, tipo: 'meses' as const, label: '12 meses' },
    { valor: 2, tipo: 'anos' as const, label: '2 años' },
    { valor: 3, tipo: 'anos' as const, label: '3 años' },
    { valor: 4, tipo: 'anos' as const, label: '4 años' }
  ];

  constructor(private router: Router) {}

  get tasaAplicada(): number {
    return this.tasaTREA[this.moneda];
  }

  get plazoEnMeses(): number {
    if (this.tipoplazo === 'meses') {
      return this.plazo;
    } else {
      return this.plazo * 12;
    }
  }

  get tasaDiaria(): number {
    return this.tasaAplicada / 360;
  }

  get interesEstimado(): number {
    const diasInversion = this.plazoEnMeses * 30; // aproximado
    return (this.monto * this.tasaAplicada * this.plazoEnMeses) / (100 * 12);
  }

  get montoTotal(): number {
    return this.monto + this.interesEstimado;
  }

  get simboloMoneda(): string {
    return this.moneda === 'soles' ? 'S/' : 'USD';
  }

  setMonto(event: any): void {
    let value = event.target.value.replace(/\D/g, ''); // solo números
    if (value === '') {
      this.monto = 0;
    } else {
      this.monto = Math.max(300, parseInt(value));
    }
  }

  seleccionarPlazo(plazo: { valor: number; tipo: 'meses' | 'anos' }): void {
    this.plazo = plazo.valor;
    this.tipoplazo = plazo.tipo;
  }

  continuarApertura(): void {
    // Guardar datos en sessionStorage o pasar a través de routing
    sessionStorage.setItem('plazoFijoData', JSON.stringify({
      monto: this.monto,
      moneda: this.moneda,
      plazo: this.plazo,
      tipoplazo: this.tipoplazo,
      tasaAplicada: this.tasaAplicada,
      interesEstimado: this.interesEstimado,
      montoTotal: this.montoTotal
    }));
    
    this.router.navigate(['/abrir-cuenta']);
  }
}
