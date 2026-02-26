import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProductsComponent } from '../../components/products/products.component';
import { PromotionsComponent } from '../../components/promotions/promotions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, ProductsComponent, PromotionsComponent],
  template: `
    <app-hero></app-hero>
    <app-services></app-services>
    <app-products></app-products>
    <app-promotions></app-promotions>
  `
})
export class HomeComponent {}
