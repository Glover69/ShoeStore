import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { MaterialModule } from '../../material.module';
import { ShoeDetailPageComponent } from './pages/shoe-detail-page/shoe-detail-page.component';




@NgModule({
  declarations: [
    ShopComponent,
    ShoeDetailPageComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class ShopModule { }
