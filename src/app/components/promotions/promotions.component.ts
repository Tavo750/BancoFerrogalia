import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {
  promotions = [
    {
      icon: 'smartphone',
      title: 'App Banca Móvil Ferrogalia',
      description: 'Realiza operaciones desde donde estés',
      link: '#',
      color: 'primary'
    },
    {
      icon: 'savings',
      title: 'Ahorra con Alcancía Virtual',
      description: '¡Cumple tus metas de ahorro fácilmente!',
      link: '#',
      color: 'secondary'
    },
    {
      icon: 'attach_money',
      title: 'Préstamo Online',
      description: 'Obtén tu dinero al instante',
      link: '#',
      color: 'accent'
    },
    {
      icon: 'card_giftcard',
      title: 'Programa de Puntos',
      description: 'Acumula y canjea por increíbles premios',
      link: '#',
      color: 'primary'
    }
  ];

  educationItems = [
    {
      title: 'Mi historial Crediticio',
      description: 'Aprende a mantener un buen historial',
      link: '#'
    },
    {
      title: 'Conoce nuestro Blog',
      description: 'Tips y consejos financieros',
      link: '#'
    },
    {
      title: 'Aprende a manejar tu dinero',
      description: 'Cursos gratuitos de educación financiera',
      link: '#'
    }
  ];
}
