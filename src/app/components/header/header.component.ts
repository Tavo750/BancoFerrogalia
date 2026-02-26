import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;

  menuItems = [
    { label: 'Personas', link: '#', hasSubmenu: true },
    { label: 'Empresas', link: '#', hasSubmenu: true },
    { label: 'Créditos', link: '#', hasSubmenu: true },
    { label: 'Tarjetas', link: '#', hasSubmenu: true },
    { label: 'Seguros', link: '#', hasSubmenu: true },
    { label: 'Ayuda', link: '#', hasSubmenu: false }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
