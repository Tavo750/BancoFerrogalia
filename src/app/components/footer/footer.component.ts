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
    { icon: 'pi pi-facebook', link: 'https://www.facebook.com/profile.php?id=61586803239064', label: 'Facebook' },
    { icon: 'pi pi-twitter', link: 'https://x.com/ferrogalia1', label: 'X' },
    { icon: 'pi pi-tiktok', link: 'https://www.tiktok.com/@bancoferrogalia', label: 'Tiktok' },
    { icon: 'pi pi-linkedin', link: 'https://www.linkedin.com/in/banco-ferrogalia-048a413b3', label: 'LinkedIn' },
    { icon: 'pi pi-instagram', link: 'https://www.instagram.com/bancoferrogalia/', label: 'Instagram' }
  ];
}
