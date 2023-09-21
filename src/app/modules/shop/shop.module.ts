import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';




@NgModule({
  declarations: [
    ShopComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    
  ]
})
export class ShopModule { }
