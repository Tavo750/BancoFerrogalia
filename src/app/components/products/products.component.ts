import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  documentNumber = '';

  quickHelp = [
    {
      title: '¿Cómo creo mi clave de 6 dígitos?',
      link: '#'
    },
    {
      title: '¿Cómo activar el Token Digital?',
      link: '#'
    },
    {
      title: 'Solicita ayuda con tus deudas',
      link: '#'
    },
    {
      title: '¿Cómo cambiar mi clave de cajero?',
      link: '#'
    }
  ];

  checkProducts() {
    if (this.documentNumber) {
      console.log('Consultando productos para:', this.documentNumber);
      // Aquí iría la lógica de consulta
    }
  }
}
