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
  `,
  styles: [`
    main {
      min-height: 100vh;
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
