import { NgModule } from '@angular/core';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { LandingPageComponent } from './landing-page.component';
import { CommonModule } from '@angular/common';
import { ShoeHintComponent } from './components/shoe-hint/shoe-hint.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    ShoeHintComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule
  ]
})
export class LandingPageModule { }
