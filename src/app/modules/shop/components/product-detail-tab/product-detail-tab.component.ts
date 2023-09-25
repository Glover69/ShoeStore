import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail-tab',
  templateUrl: './product-detail-tab.component.html',
  styleUrls: ['./product-detail-tab.component.scss']
})
export class ProductDetailTabComponent {
  tabSelected: string = 'tab1';

  setActiveTab(tab: string) {
    this.tabSelected = tab;
  }
}
