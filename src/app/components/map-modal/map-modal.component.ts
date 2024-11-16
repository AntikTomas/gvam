import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent  implements OnInit {

  constructor(
    private modalControl: ModalController
  ) { }

  ngOnInit() {}

  cancel() {
    this.modalControl.dismiss();
  }

}
