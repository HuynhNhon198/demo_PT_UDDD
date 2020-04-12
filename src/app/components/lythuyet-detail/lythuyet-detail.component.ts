import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lythuyet-detail',
  templateUrl: './lythuyet-detail.component.html',
  styleUrls: ['./lythuyet-detail.component.scss'],
})
export class LythuyetDetailComponent implements OnInit {
  @Input() chuong: any;
  slideOpts = {
    speed: 1000,
  };
  constructor(
    private modalCtl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.chuong);
  }

  dismiss() {
    this.modalCtl.dismiss();
  }

}
