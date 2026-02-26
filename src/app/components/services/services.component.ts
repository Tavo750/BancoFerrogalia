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
      icon: 'smartphone',
      title: 'App Ferrogalia',
      tagline: 'Tu sucursal en el bolsillo',
      description: 'Nuestra aplicación móvil es tu principal punto de contacto: onboarding biométrico, saldos en tiempo real, configuración de límites y notificaciones de seguridad. Arquitectura de alta disponibilidad para que nunca te falle.',
      highlight: true,
      comingSoon: true,
      features: []
    },
    {
      icon: 'stars',
      title: 'Programa de Lealtad',
      tagline: 'Recompensas por tu transaccionalidad',
      description: 'Un sistema que premia cada operación que realizas con tu cuenta Ferrogalia.',
      highlight: false,
      comingSoon: false,
      features: [
        'Acumula puntos o millas por consumos con tarjeta de débito',
        'Bonos por mantener un Plazo Fijo activo',
        'Canjea por experiencias, productos o cashback directo'
      ]
    },
    {
      icon: 'swap_horiz',
      title: 'Transacciones Interbancarias',
      tagline: 'Inmediatas y sin costo',
      description: 'Ecosistema de pagos vital para tu operatividad diaria.',
      highlight: false,
      comingSoon: false,
      features: [
        'Transferencias inmediatas vía CCI integradas',
        'Conexión directa con PLIN y Yape por número de celular',
        'Envía y recibe dinero al instante sin costo adicional'
      ]
    }
  ];
}
