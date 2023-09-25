import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-accordion-mobile',
  templateUrl: './product-accordion-mobile.component.html',
  styleUrls: ['./product-accordion-mobile.component.scss']
})
export class ProductAccordionMobileComponent {

  // tabSelected: string = 'tab1';
  // // tabSelected2: string = 'tab2';
  // // tabSelected3: string = 'tab3';

  // isTabOneSelected : boolean = false;
  // isTabTwoSelected : boolean = false;
  // isTabThreeSelected : boolean = false;

  // setActiveTab(tab: string) {
  //   this.tabSelected = tab;
  // }

  // setTabOneActive(){
  //   this.isTabOneSelected! = this.isTabOneSelected;
  //   this.setActiveTab;

  //   this.isTabTwoSelected!;
  //   this.isTabThreeSelected!;
  // }

  // setTabTwoActive(){
  //   this.isTabOneSelected!;
  //   this.isTabTwoSelected! = this.isTabTwoSelected;
  //   this.setActiveTab;

  //   this.isTabThreeSelected!;
  // }

  // setTabThreeActive(){
  //   this.isTabOneSelected!;
  //   this.isTabTwoSelected!;
  //   this.isTabThreeSelected! = this.isTabThreeSelected;
  //   this.setActiveTab;

  // }

  expanded1 : boolean = false;
  expanded2 : boolean = false;
  expanded3 : boolean = false;

 

  toggleAccordionOne() {
    this.expanded1 = !this.expanded1;
  }

  toggleAccordionTwo() {
    this.expanded2 = !this.expanded2;
  }

  toggleAccordionThree() {
    this.expanded3 = !this.expanded3;
  }

  
}
