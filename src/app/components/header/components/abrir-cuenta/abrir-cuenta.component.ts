import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormularioService } from '../../service/formulario.service';
import { CuentaNuevaBody } from '../../interfaces/cuentaNuevaBodyInterface';

@Component({
  selector: 'app-abrir-cuenta',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './abrir-cuenta.component.html',
  styleUrl: './abrir-cuenta.component.scss'
})
export class AbrirCuentaComponent {
  submitted = false;
  loading = false;
  openFaq: number | null = null;

  constructor(private formularioService: FormularioService) {}

  form = {
    tipoCuenta: '',
    dni: '',
    celular: '',
    correo: '',
    privacidad: false
  };

  tiposCuenta = [
    { value: 'simple', label: 'Cuenta Simple' },
    { value: 'ahorro', label: 'Cuenta de Ahorros Cero Costo' },
    { value: 'sueldo', label: 'Cuenta Sueldo Beneficio Total' }
  ];

  errors: Record<string, string> = {};

  benefits = [
    {
      icon: 'face',
      title: 'Apertura con biometría facial',
      description: 'Abre tu cuenta en simples pasos sin ir al banco.'
    },
    {
      icon: 'money_off',
      title: 'Sin costo de mantenimiento',
      description: 'Desde S/ 0, sin comisiones por movimientos.'
    },
    {
      icon: 'smartphone',
      title: 'Todo desde la App Ferrogalia',
      description: 'Consulta saldos, transfiere y configura notificaciones.'
    },
    {
      icon: 'send',
      title: 'Transferencias instantáneas',
      description: 'Con PLIN y Yape al instante y sin costo adicional.'
    }
  ];

  faqs = [
    {
      question: '¿Cómo abrir una Cuenta de Ahorro Cero Costo?',
      intro: 'Por la web Banco Ferrogalia:',
      items: [
        'Ingresa a nuestra página web y completa tu DNI, celular y correo.',
        'Confirma tu correo electrónico para continuar.',
        'Llena tus datos personales y completa la verificación biométrica.',
        'Haz clic en "Abrir cuenta" y ¡listo! Tu cuenta está activa.'
      ],
      text: ''
    },
    {
      question: '¿La Cuenta de Ahorro Ferrogalia incluye Tarjeta de Débito?',
      intro: '',
      items: [],
      text: '¡Sí! Al abrir tu Cuenta de Ahorro, puedes obtener tu Tarjeta de Débito Clásica de manera gratuita. Si eres cliente nuevo, puedes solicitarla una vez que completes el proceso de onboarding digital.'
    },
    {
      question: '¿Qué operaciones puedo hacer gratis con la Cuenta de Ahorro?',
      intro: 'Con tu Cuenta de Ahorro puedes:',
      items: [
        'Realizar transferencias a cuentas Ferrogalia sin costo.',
        'Transferencias interbancarias vía CCI sin comisión.',
        'Hacer pagos con PLIN o Yape desde tu número de celular.',
        'Retirar en cajeros de la red propia o asociada sin comisión.'
      ],
      text: ''
    },
    {
      question: '¿Cuál es el monto mínimo para abrir una cuenta?',
      intro: '',
      items: [],
      text: 'No existe monto mínimo para abrir tu Cuenta de Ahorro Cero Costo. La apertura es completamente gratuita y no requiere depósito inicial.'
    },
    {
      question: '¿Es seguro el proceso de apertura de cuenta?',
      intro: '',
      items: [],
      text: 'Sí. El proceso utiliza biometría facial certificada y encriptación de datos de extrema seguridad. Tu información está protegida con los más altos estándares del sistema financiero peruano.'
    }
  ];

  clearError(field: string): void {
    delete this.errors[field];
  }

  onSubmit(): void {
    this.errors = {};

    if (!this.form.tipoCuenta) {
      this.errors['tipoCuenta'] = 'Selecciona un tipo de cuenta.';
    }
    if (!this.form.dni || this.form.dni.length !== 8) {
      this.errors['dni'] = 'Ingresa un DNI válido de 8 dígitos.';
    }
    if (!this.form.celular || this.form.celular.length !== 9) {
      this.errors['celular'] = 'Ingresa un celular válido de 9 dígitos.';
    }
    if (!this.form.correo || !this.form.correo.includes('@')) {
      this.errors['correo'] = 'Ingresa un correo electrónico válido.';
    }
    if (!this.form.privacidad) {
      this.errors['privacidad'] = 'Debes aceptar la Política de Privacidad.';
    }

    if (Object.keys(this.errors).length > 0) return;

    this.loading = true;

    const selectedTipo = this.tiposCuenta.find(t => t.value === this.form.tipoCuenta);

    const body: CuentaNuevaBody = {
      dni: this.form.dni,
      celular: this.form.celular,
      correo: this.form.correo,
      tipo_cuenta: selectedTipo?.label ?? this.form.tipoCuenta
    };

    this.formularioService.CrearCuentaUsuario(body).subscribe({
      next: () => {
        this.loading = false;
        this.submitted = true;
      },
      error: () => {
        this.loading = false;
        this.errors['general'] = 'Ocurrió un error al enviar la solicitud. Inténtalo de nuevo.';
      }
    });
  }

  resetForm(): void {
    this.form = { tipoCuenta: '', dni: '', celular: '', correo: '', privacidad: false };
    this.errors = {};
    this.submitted = false;
  }

  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }
}
