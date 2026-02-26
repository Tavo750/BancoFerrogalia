import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    @if (showShell) {
      <app-header></app-header>
    }
    <main>
      <router-outlet></router-outlet>
    </main>
    @if (showShell) {
      <app-footer></app-footer>
    }
    <a
      href="https://wa.me/51943643626?text=Hola%20Banco%20Ferrogalia%2C%20necesito%20ayuda"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float"
      aria-label="Contáctanos por WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.489 2.031 7.8L0 32l8.438-2.012A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.771-1.854l-.486-.29-5.01 1.195 1.234-4.878-.317-.5A13.266 13.266 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.94c-.398-.199-2.354-1.162-2.719-1.294-.364-.133-.629-.199-.894.199-.265.398-1.027 1.294-1.259 1.56-.232.265-.464.298-.862.1-.398-.199-1.68-.619-3.2-1.976-1.183-1.056-1.981-2.36-2.213-2.758-.232-.398-.025-.613.175-.811.179-.179.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.894-2.155-1.226-2.95-.323-.773-.65-.668-.894-.68l-.762-.013c-.265 0-.696.1-1.06.497-.364.398-1.392 1.36-1.392 3.316 0 1.956 1.425 3.847 1.624 4.112.199.265 2.804 4.281 6.793 6.003.95.41 1.692.655 2.27.838.954.303 1.822.26 2.509.158.765-.114 2.354-.962 2.686-1.891.332-.93.332-1.727.232-1.891-.099-.166-.365-.265-.763-.464z"/>
      </svg>
    </a>
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
    .whatsapp-float {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 9999;
      width: 60px;
      height: 60px;
      background-color: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(37, 211, 102, 0.5);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      text-decoration: none;
    }
    .whatsapp-float:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 24px rgba(37, 211, 102, 0.7);
    }
    .whatsapp-float svg {
      display: block;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Banco Ferrogalia';
  showShell = true;

  private hiddenRoutes = ['/abrir-cuenta'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const url = (event as NavigationEnd).urlAfterRedirects.split('?')[0];
        this.showShell = !this.hiddenRoutes.includes(url);
      });
  }
}
