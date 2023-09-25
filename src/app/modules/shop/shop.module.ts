import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { MaterialModule } from '../../material.module';
import { ShoeDetailPageComponent } from './pages/shoe-detail-page/shoe-detail-page.component';
import { ProductAccordionMobileComponent } from './components/product-accordion-mobile/product-accordion-mobile.component';




@NgModule({
  declarations: [
    ShopComponent,
    ShoeDetailPageComponent,
    ProductAccordionMobileComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class ShopModule { }
