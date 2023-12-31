import { Component } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";
import {
  fadeIn,
  fadeOut,
} from "../../../animations/carousel.animations";


export interface ReviewSlides {
  customerImg: string;
  customerName: string;
  customerReviewTxt: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],

  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1000ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1000ms' }})]),
    ])
  ]

})
export class LandingPageComponent {
  title = 'ShoeStore';

  reviews: ReviewSlides[] = [
    { customerImg: "/assets/images/profile-2.jpeg", customerName: "John Appleseed", customerReviewTxt: "Fantastic clothes. I wasn't sure when I ordered them but I have to say it's without any doubts the best purchase of this year. So comfy and stylish ❤️." },
    { customerImg: "/assets/images/profile-3.jpg", customerName: "Daniel Glover", customerReviewTxt: "Fantastic clothes. I wasn't sure when I ordered them but I have to say it's without any doubts the best purchase of this year. So comfy and stylish ❤️." },
    { customerImg: "/assets/images/profile-4.jpg", customerName: "Benjamin Coyle-Larner", customerReviewTxt: "Fantastic clothes. I wasn't sure when I ordered them but I have to say it's without any doubts the best purchase of this year. So comfy and stylish ❤️." },
    { customerImg: "/assets/images/profile-5.jpg", customerName: "Benjamin Coyle-Larner", customerReviewTxt: "Fantastic clothes. I wasn't sure when I ordered them but I have to say it's without any doubts the best purchase of this year. So comfy and stylish ❤️." },
    { customerImg: "/assets/images/profile-6.jpeg", customerName: "Benjamin Coyle-Larner", customerReviewTxt: "Fantastic clothes. I wasn't sure when I ordered them but I have to say it's without any doubts the best purchase of this year. So comfy and stylish ❤️." },
    { customerImg: "/assets/images/profile-7.jpeg", customerName: "Benjamin Coyle-Larner", customerReviewTxt: "Fantastic clothes. I wasn't sure when I ordered them but I have to say it's without any doubts the best purchase of this year. So comfy and stylish ❤️." },
    { customerImg: "/assets/images/profile-3.jpg", customerName: "Benjamin Coyle-Larner", customerReviewTxt: "Fantastic clothes. I wasn't sure when I ordered them but I have to say it's without any doubts the best purchase of this year. So comfy and stylish ❤️." },
    { customerImg: "/assets/images/profile-4.jpg", customerName: "Benjamin Coyle-Larner", customerReviewTxt: "Fantastic clothes. I wasn't sure when I ordered them but I have to say it's without any doubts the best purchase of this year. So comfy and stylish ❤️." },


  ]
  
  goToCard(index: number) {
    // Update the currentIndex when an indicator is clicked
    this.currentSlide = index;
  }


  currentSlide = 0;

  constructor() { }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.reviews.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.reviews.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }


}
