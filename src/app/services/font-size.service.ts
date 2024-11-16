import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {

  fontSize: number = 16;
  changeSize: number = 8;
  maxSize: number = 32;
  minSize: number = 16;

  constructor() { }

  incrementSize() {
    if (this.fontSize === this.maxSize) {return;}
    this.fontSize = this.fontSize + this.changeSize;
  }

  decrementSize() {
    console.log('decrement service');
    if (this.fontSize === this.minSize) {return;}
    this.fontSize = this.fontSize - this.changeSize;
  }

  maxSizeReached() {
    return this.fontSize >= this.maxSize;
  }

  minSizeReached() {
    return this.fontSize <= this.minSize;
  }

}
