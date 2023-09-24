import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoe-detail-page',
  templateUrl: './shoe-detail-page.component.html',
  styleUrls: ['./shoe-detail-page.component.scss']
})
export class ShoeDetailPageComponent {

  isWebShareSupported: boolean = false;


  constructor(public router : Router){
    this.isWebShareSupported = navigator.share !== undefined;

  }

  share() {
    if (navigator.share) {
      const currentUrl = this.router.url;

      navigator
        .share({
          title: 'Shoe Store',
          url: currentUrl,
        })
        .then(() => {
          console.log('Shared successfully');
        })
        .catch((error) => {
          console.error('Error sharing:', error);
        });
    } else {
      // Fallback for browsers that don't support Web Share API
      console.log('Web Share API not supported.');
    }
  }

}
