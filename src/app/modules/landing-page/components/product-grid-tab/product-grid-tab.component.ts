import { Component } from '@angular/core';

@Component({
  selector: 'app-product-grid-tab',
  templateUrl: './product-grid-tab.component.html',
  styleUrls: ['./product-grid-tab.component.scss']
})
export class ProductGridTabComponent {
  tabSelected: string = 'tab1';

  setActiveTab(tab: string) {
    this.tabSelected = tab;
  }
}
