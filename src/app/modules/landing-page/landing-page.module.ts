import { NgModule } from '@angular/core';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { LandingPageComponent } from './landing-page.component';
import { CommonModule } from '@angular/common';
import { ShoeHintComponent } from './components/shoe-hint/shoe-hint.component';
import { ProductGridTabComponent } from './components/product-grid-tab/product-grid-tab.component';
import { BestSellersTabComponent } from './components/product-grid-tab/options/best-sellers-tab/best-sellers-tab.component';
import { NewArrivalsTabComponent } from './components/product-grid-tab/options/new-arrivals-tab/new-arrivals-tab.component';
import { SaleTabComponent } from './components/product-grid-tab/options/sale-tab/sale-tab.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    ShoeHintComponent,
    ProductGridTabComponent,
    BestSellersTabComponent,
    SaleTabComponent,
    NewArrivalsTabComponent,
    NewsletterComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
    
  ]
})
export class LandingPageModule { }
