import { Component, HostListener, Input } from '@angular/core';

export interface AccordionContent {
  title: string,
  content: string,
  isExpanded: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  expanded = false;

  toggleBar() {
    this.expanded = !this.expanded;
  }

  closeBar() {
    this.expanded = !this.expanded;
  }

  // Generating accordion tiles

  content = [
    { title: 'Home', content: 'We produce and sell Homemade Ghanaian Indigenous Cereals; Tombrown, Hausa Koko paste, Buff Loaf, Koose Powder, Ekuegbemi, Oblayoo, Atadwe Pudding, Atadwe Flour, Fibre (Wheat Flour), Rice Pudding, Apapransa and Oat Flour.', isExpanded: false },  
    { title: 'Shop', content: 'Yes, we offer delivery services.', isExpanded: false },
    { title: 'Product', content: 'Yes, we deliver outside Accra as well.', isExpanded: false },
    { title: 'Pages', content: 'Yes, we deliver outside Accra as well.', isExpanded: false },


  ]

}
