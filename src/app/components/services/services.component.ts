import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      icon: 'account_balance_wallet',
      title: 'Abrir una Cuenta',
      description: 'Abre tu cuenta de ahorros 100% digital en minutos',
      link: '#'
    },
    {
      icon: 'credit_card',
      title: 'Obtener una Tarjeta',
      description: 'Solicita tu tarjeta de crédito con beneficios exclusivos',
      link: '#'
    },
    {
      icon: 'payments',
      title: 'Solicitar un Préstamo',
      description: 'Préstamos personales con tasas preferenciales',
      link: '#'
    },
    {
      icon: 'schedule',
      title: 'Adelantar mi Sueldo',
      description: 'Recibe un adelanto de tu sueldo cuando lo necesites',
      link: '#'
    },
    {
      icon: 'directions_car',
      title: 'SOAT Virtual',
      description: 'Compra tu SOAT al mejor precio desde S/49',
      link: '#'
    },
    {
      icon: 'currency_exchange',
      title: 'Cambio de Dólares',
      description: 'El mejor tipo de cambio del mercado',
      link: '#'
    }
  ];
}
