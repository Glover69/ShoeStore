import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-accordion',
  templateUrl: './footer-accordion.component.html',
  styleUrls: ['./footer-accordion.component.scss']
})
export class FooterAccordionComponent {

  expanded : boolean = false;
 

  toggleAccordion() {
    this.expanded = !this.expanded;
  }

  @Input() title!: string;
  @Input() content!: string;
  @Input() isExpanded!: boolean; 

}
