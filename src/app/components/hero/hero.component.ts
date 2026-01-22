import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  slides = [
    {
      title: '¡Abre tu cuenta y gana premios!',
      subtitle: 'Participa por increíbles premios solo por abrir tu cuenta de ahorros',
      cta: 'Participar ahora',
      link: '#',
      image: 'assets/images/hero-1.jpg'
    },
    {
      title: 'Préstamos personales desde 8.5% TEA',
      subtitle: 'Obtén el dinero que necesitas con las mejores tasas del mercado',
      cta: 'Solicitar préstamo',
      link: '#',
      image: 'assets/images/hero-2.jpg'
    },
    {
      title: 'Tarjeta de Crédito sin costo de mantenimiento',
      subtitle: 'El primer año sin costo de mantenimiento y 10% de cashback',
      cta: 'Pedir tarjeta',
      link: '#',
      image: 'assets/images/hero-3.jpg'
    }
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
