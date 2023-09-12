import { Component } from '@angular/core';

export interface CardData {
  productImg: string,
  productName: string,
  productPrice: string,
}

@Component({
  selector: 'app-best-sellers-tab',
  templateUrl: './best-sellers-tab.component.html',
  styleUrls: ['./best-sellers-tab.component.scss']
})
export class BestSellersTabComponent {

  card : CardData[] = [
    {productImg: '/assets/images/Nike/nike-vapor-women-1.jpeg', productName: 'Nike Jordan MVP', productPrice: '$56.00'},
    {productImg: '/assets/images/Nike/nike-vapor-women-1.jpeg', productName: 'Nike Jordan MVP', productPrice: '$56.00'},
    {productImg: '/assets/images/Nike/nike-vapor-women-1.jpeg', productName: 'Nike Jordan MVP', productPrice: '$56.00'},
    {productImg: '/assets/images/Nike/nike-vapor-women-1.jpeg', productName: 'Nike Jordan MVP', productPrice: '$56.00'},
    {productImg: '/assets/images/Nike/nike-vapor-women-1.jpeg', productName: 'Nike Jordan MVP', productPrice: '$56.00'},
    {productImg: '/assets/images/Nike/nike-vapor-women-1.jpeg', productName: 'Nike Jordan MVP', productPrice: '$56.00'},
    {productImg: '/assets/images/Nike/nike-vapor-women-1.jpeg', productName: 'Nike Jordan MVP', productPrice: '$56.00'},
    {productImg: '/assets/images/Nike/nike-vapor-women-1.jpeg', productName: 'Nike Jordan MVP', productPrice: '$56.00'},

  ]

}
