import { Component } from '@angular/core';

export interface AccordionContent {
  title: string,
  content: string,
  isExpanded: boolean;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // Generating accordion tiles

  content = [
    { title: 'Shop', content: 'We produce and sell Homemade Ghanaian Indigenous Cereals; Tombrown, Hausa Koko paste, Buff Loaf, Koose Powder, Ekuegbemi, Oblayoo, Atadwe Pudding, Atadwe Flour, Fibre (Wheat Flour), Rice Pudding, Apapransa and Oat Flour.', isExpanded: false },  
    { title: 'Information', content: 'Yes, we offer delivery services.', isExpanded: false },
    { title: 'Company', content: 'Yes, we deliver outside Accra as well.', isExpanded: false },

  ]

}
