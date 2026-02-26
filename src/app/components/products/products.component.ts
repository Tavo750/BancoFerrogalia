import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  activeProduct: number | null = null;

  products = [
    {
      icon: 'savings',
      name: 'Cuenta de Ahorro',
      tagline: 'Cero Costo',
      description: 'Cuenta 100% digital que elimina las barreras de la banca tradicional.',
      features: [
        'Apertura remota mediante biometría facial',
        'Sin monto mínimo de apertura',
        'Libre de comisiones por mantenimiento o movimientos'
      ],
      color: '#5D182E'
    },
    {
      icon: 'account_balance_wallet',
      name: 'Cuenta Sueldo',
      tagline: 'Beneficio Total',
      description: 'El producto ancla diseñado para fidelizarte con beneficios reales.',
      features: [
        'Servicio de "Adelanto de Sueldo" para imprevistos',
        'Acceso preferencial a créditos',
        'Descuentos exclusivos en establecimientos afiliados',
        'Sin comisiones por retiros en cajeros de red propia o asociada'
      ],
      color: '#7B2D45'
    },
    {
      icon: 'trending_up',
      name: 'Plazo Fijo Flexible',
      tagline: 'Crecimiento Disponible',
      description: 'Instrumento de inversión ideal para tu fondo de emergencia.',
      features: [
        'Cancelación anticipada antes del vencimiento',
        'Penalidad mínima sobre la tasa de interés',
        'Capital siempre intacto'
      ],
      color: '#944158'
    },
    {
      icon: 'show_chart',
      name: 'Plazo Fijo No Flexible',
      tagline: 'Rentabilidad Máxima',
      description: 'Producto estrella para rentabilizar gratificaciones y excedentes.',
      features: [
        'TCEA más competitiva del mercado',
        'Periodos pactados de 3, 6 o 12 meses',
        'Simulador web para visualizar ganancia exacta desde el inicio'
      ],
      color: '#5D182E'
    }
  ];

  toggleProduct(index: number): void {
    this.activeProduct = this.activeProduct === index ? null : index;
  }
}
