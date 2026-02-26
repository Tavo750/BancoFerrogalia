import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface MenuGroup {
  title: string;
  items: { label: string; link: string }[];
}

export interface MenuTab {
  id: string;
  icon: string;
  label: string;
  groups: MenuGroup[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  openMenuKey: string | null = null;
  activeProductTab = 'cuentas';
  activeServiceTab = 'app';
  activePromoTab = 'descuentos';
  activeAyudaTab = 'centro';
  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  menuItems = [
    { label: 'Productos',   link: '#', key: 'productos'   },
    { label: 'Servicios',   link: '#', key: 'servicios'   },
    { label: 'Promociones', link: '#', key: 'promociones' },
    { label: 'Ayuda',       link: '#', key: 'ayuda'       }
  ];

  productTabs: MenuTab[] = [
    {
      id: 'cuentas',
      icon: 'account_balance_wallet',
      label: 'Cuentas',
      groups: [
        {
          title: 'Cuentas de Ahorro',
          items: [
            { label: 'Cuenta de Ahorro Cero Costo', link: '/abrir-cuenta' },
            { label: 'Cuenta Sueldo Beneficio Total', link: '/abrir-cuenta' }
          ]
        }
      ]
    },
    {
      id: 'plazos',
      icon: 'trending_up',
      label: 'Plazos Fijos',
      groups: [
        {
          title: 'Inversión Flexible',
          items: [
            { label: 'Plazo Fijo Flexible – Crecimiento Disponible', link: '#' }
          ]
        },
        {
          title: 'Inversión de Rentabilidad',
          items: [
            { label: 'Plazo Fijo No Flexible – Rentabilidad Máxima', link: '#' }
          ]
        }
      ]
    },
    // {
    //   id: 'digital',
    //   icon: 'payments',
    //   label: 'Pagos Digitales',
    //   groups: [
    //     {
    //       title: 'Transferencias',
    //       items: [
    //         { label: 'Transferencias Inmediatas vía CCI', link: '#' },
    //         { label: 'Conexión con PLIN y Yape', link: '#' }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 'lealtad',
    //   icon: 'stars',
    //   label: 'Programa de Lealtad',
    //   groups: [
    //     {
    //       title: 'Recompensas',
    //       items: [
    //         { label: 'Acumula puntos con tu tarjeta de débito', link: '#' },
    //         { label: 'Bonos por Plazo Fijo activo', link: '#' },
    //         { label: 'Canjea por cashback, experiencias y más', link: '#' }
    //       ]
    //     }
    //   ]
    // }
  ];

  serviceTabs: MenuTab[] = [
    {
      id: 'app',
      icon: 'smartphone',
      label: 'App Ferrogalia',
      groups: [
        {
          title: 'Tu sucursal en el bolsillo',
          items: [
            { label: 'Onboarding digital biométrico', link: '#' },
            { label: 'Saldos y movimientos en tiempo real', link: '#' },
            { label: 'Configuración de límites y alertas', link: '#' },
            { label: 'Alta disponibilidad 24/7', link: '#' }
          ]
        }
      ]
    },
    // {
    //   id: 'lealtad',
    //   icon: 'stars',
    //   label: 'Programa de Lealtad',
    //   groups: [
    //     {
    //       title: 'Acumula puntos',
    //       items: [
    //         { label: 'Puntos por consumos con tarjeta de débito', link: '#' },
    //         { label: 'Bonos por mantener Plazo Fijo activo', link: '#' }
    //       ]
    //     },
    //     {
    //       title: 'Canjea recompensas',
    //       items: [
    //         { label: 'Cashback directo a tu cuenta', link: '#' },
    //         { label: 'Experiencias y productos exclusivos', link: '#' }
    //       ]
    //     }
    //   ]
    // },
    {
      id: 'transferencias',
      icon: 'swap_horiz',
      label: 'Transferencias',
      groups: [
        {
          title: 'Interbancarias',
          items: [
            { label: 'Transferencias inmediatas vía CCI', link: '#' },
            { label: 'Envío y recepción sin costo adicional', link: '#' }
          ]
        },
        {
          title: 'Billeteras Digitales',
          items: [
            { label: 'Paga y cobra con PLIN', link: '#' },
            { label: 'Operaciones con Yape por celular', link: '#' }
          ]
        }
      ]
    }
  ];

  promocionesTabs: MenuTab[] = [
    {
      id: 'descuentos',
      icon: 'local_offer',
      label: 'Descuentos',
      groups: [
        {
          title: 'Descuentos en comercios',
          items: [
            { label: 'Descuentos exclusivos en establecimientos afiliados', link: '#' },
            { label: 'Alertas geolocalizadas en la app', link: '#' }
          ]
        }
      ]
    },
    {
      id: 'lealtad',
      icon: 'stars',
      label: 'Programa de Lealtad',
      groups: [
        {
          title: 'Acumula puntos',
          items: [
            { label: 'Puntos por consumos con tarjeta de débito', link: '#' },
            { label: 'Bonos por mantener Plazo Fijo activo', link: '#' }
          ]
        },
        {
          title: 'Canjea recompensas',
          items: [
            { label: 'Cashback directo a tu cuenta', link: '#' },
            { label: 'Experiencias y productos exclusivos', link: '#' }
          ]
        }
      ]
    },
    {
      id: 'especiales',
      icon: 'celebration',
      label: 'Ofertas Especiales',
      groups: [
        {
          title: 'Tarjeta de Crédito',
          items: [
            { label: 'Primer año sin costo de mantenimiento', link: '#' },
            { label: '10% de cashback en tu tarjeta', link: '#' }
          ]
        },
        {
          title: 'Sorteos y Campañas',
          items: [
            { label: '¡Abre tu cuenta y gana premios!', link: '/abrir-cuenta' },
            { label: 'Retiros gratis en cajeros afiliados', link: '#' },
            { label: 'Transferencias interbancarias sin costo', link: '#' }
          ]
        }
      ]
    }
  ];

  ayudaTabs: MenuTab[] = [
    {
      id: 'centro',
      icon: 'help_outline',
      label: 'Centro de Ayuda',
      groups: [
        {
          title: 'Preguntas Frecuentes',
          items: [
            { label: '¿Cómo abrir una cuenta?', link: '/abrir-cuenta' },
            { label: '¿Cómo activar mi tarjeta de débito?', link: '#' },
            { label: '¿Cómo realizar una transferencia?', link: '#' },
            { label: 'Ver todas las preguntas frecuentes', link: '#' }
          ]
        },
        {
          title: 'Guías y Tutoriales',
          items: [
            { label: 'Primeros pasos en Ferrogalia', link: '#' },
            { label: 'Cómo usar la banca en línea', link: '#' }
          ]
        }
      ]
    },
    {
      id: 'datos',
      icon: 'manage_accounts',
      label: 'Actualización de Datos',
      groups: [
        {
          title: 'Mis Datos Personales',
          items: [
            { label: 'Actualizar número de celular', link: '#' },
            { label: 'Actualizar correo electrónico', link: '#' },
            { label: 'Cambiar dirección de domicilio', link: '#' }
          ]
        },
        {
          title: 'Seguridad y Acceso',
          items: [
            { label: 'Cambiar clave de banca en línea', link: '#' },
            { label: 'Configurar notificaciones de seguridad', link: '#' }
          ]
        }
      ]
    },
    {
      id: 'contacto',
      icon: 'headset_mic',
      label: 'Contáctanos',
      groups: [
        {
          title: 'Canales de Atención',
          items: [
            { label: 'Chat en línea 24/7', link: '#' },
            { label: 'Correo: ayuda@ferrogalia.pe', link: '#' }
          ]
        },
        {
          title: 'Visítanos',
          items: [
            { label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61586803239064' },
            { label: 'Instagram', link: 'https://www.instagram.com/bancoferrogalia/' },
            { label: 'Tik Tok', link: 'https://www.tiktok.com/@bancoferrogalia' },
            { label: 'X', link: 'https://x.com/ferrogalia1' },
          ]
        }
      ]
    }
  ];

  get activeProductTabData(): MenuTab | undefined {
    return this.productTabs.find(t => t.id === this.activeProductTab);
  }

  get activeServiceTabData(): MenuTab | undefined {
    return this.serviceTabs.find(t => t.id === this.activeServiceTab);
  }

  get activePromoTabData(): MenuTab | undefined {
    return this.promocionesTabs.find(t => t.id === this.activePromoTab);
  }

  get activeAyudaTabData(): MenuTab | undefined {
    return this.ayudaTabs.find(t => t.id === this.activeAyudaTab);
  }

  openMegaMenu(key: string): void {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
    this.openMenuKey = key;
  }

  closeMegaMenu(): void {
    this.closeTimer = setTimeout(() => {
      this.openMenuKey = null;
    }, 120);
  }

  setProductTab(id: string): void { this.activeProductTab = id; }
  setServiceTab(id: string): void { this.activeServiceTab = id; }
  setPromoTab(id: string): void { this.activePromoTab = id; }
  setAyudaTab(id: string): void { this.activeAyudaTab = id; }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
