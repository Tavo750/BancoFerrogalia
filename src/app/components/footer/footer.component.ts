import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = {
    about: [
      { label: 'Nuestra historia y principios', link: '#' },
      { label: 'Información para inversionistas', link: '#' },
      { label: 'Responsabilidad Social', link: '#' },
      { label: 'Centro de Innovación', link: '#' },
      { label: 'Trabaja con nosotros', link: '#', highlight: true }
    ],
    help: [
      { label: 'Cancela tu producto', link: '#' },
      { label: 'Cancela tu seguro', link: '#' },
      { label: 'Solicitud de Ajustes Razonables', link: '#' }
    ],
    legal: [
      { label: 'Tasas y tarifas', link: '#' },
      { label: 'Transparencia de información', link: '#' },
      { label: 'Beneficiario final', link: '#' },
      { label: '¿Cómo protegemos tus datos?', link: '#' },
      { label: 'Accesibilidad', link: '#' }
    ],
    news: [
      { label: 'Ganadores de sorteos y promociones', link: '#' }
    ]
  };

  socialLinks = [
    { icon: 'facebook', link: '#', label: 'Facebook' },
    { icon: 'twitter', link: '#', label: 'Twitter' },
    { icon: 'youtube', link: '#', label: 'YouTube' },
    { icon: 'linkedin', link: '#', label: 'LinkedIn' },
    { icon: 'instagram', link: '#', label: 'Instagram' }
  ];
}
