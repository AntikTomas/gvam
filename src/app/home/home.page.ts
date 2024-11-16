import { Component, ElementRef, ViewChild } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  imageUrlList = [
    'https://historia.nationalgeographic.com.es/medio/2020/01/24/virgina-woolf-padecio-un-trastorno-bipolar-con-fases-depresivas-severas_9da23532_550x751.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/576px-Albert_Einstein_Head.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/640px-Marie_Curie_c._1920s.jpg',
  ]

  constructor() {}


  ionViewDidEnter() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  move() {
    this.swiper?.activeIndex! < this.imageUrlList.length - 1 ? this.swiper?.slideNext() : this.swiper?.slideTo(0);
  }

  indexControl() {
    console.log('slidechange');
  }

  loopfix() {
  }
}
