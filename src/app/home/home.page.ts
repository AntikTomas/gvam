import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScreenOrientation } from '@capacitor/screen-orientation';

import Swiper from 'swiper';
import { FontSizeService } from '../services/font-size.service';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from '../components/map-modal/map-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  horizontalView = false;

  imageUrlList = [
    'https://historia.nationalgeographic.com.es/medio/2020/01/24/virgina-woolf-padecio-un-trastorno-bipolar-con-fases-depresivas-severas_9da23532_550x751.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/576px-Albert_Einstein_Head.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/640px-Marie_Curie_c._1920s.jpg',
  ];

  fontSize: number;

  constructor(
    private fontService: FontSizeService,
    private mdlCtrl: ModalController,
  ) {
    this.fontSize = this.fontService.fontSize;
  }

  ionViewDidEnter() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  move() {
    this.swiper?.activeIndex! < this.imageUrlList.length - 1 ? this.swiper?.slideNext() : this.swiper?.slideTo(0);

  }

  async expandSwiper() {
    this.horizontalView = !this.horizontalView;
    //this.horizontalView ? this.swiper?.changeDirection('vertical') : this.swiper?.changeDirection('vertical');
    await ScreenOrientation.lock({orientation: this.horizontalView ? 'landscape' : 'portrait'});
  }

  decrement() {
    console.log('decrement home');
    this.fontService.decrementSize();
    this.fontSize = this.fontService.fontSize;
  }

  increment() {
    this.fontService.incrementSize();
    this.fontSize = this.fontService.fontSize;
  }

  maxReached() {
    return this.fontService.maxSizeReached();
  }

  minReached() {
    return this.fontService.minSizeReached();
  }

  async openModal() {
    const modal = await this.mdlCtrl.create({
      component: MapModalComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0.5, 0.75, 1]
    });
    modal.present();
  }

}
