import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterAccordionComponent } from './footer-accordion/footer-accordion.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FooterAccordionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    FooterAccordionComponent

  ]
})
export class SharedModule { }
