import { Component } from '@angular/core';
import { BestSellers } from 'src/app/models/shoes.models';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-best-sellers-tab',
  templateUrl: './best-sellers-tab.component.html',
  styleUrls: ['./best-sellers-tab.component.scss']
})
export class BestSellersTabComponent {

  constructor( private dataService : DataService){}

  cardData: BestSellers[] = [];

  ngOnInit(): void {
    this.dataService.getBestSellers().subscribe((_data) => {
      this.cardData = _data;
    });
  }

}
