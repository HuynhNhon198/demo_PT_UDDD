import { Component, OnInit } from '@angular/core';
import getBaiTap from 'src/app/data/baitap';
import { BaitapDetailComponent } from 'src/app/components/baitap-detail/baitap-detail.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-baitap',
  templateUrl: './baitap.page.html',
  styleUrls: ['./baitap.page.scss'],
})
export class BaitapPage implements OnInit {
  questions = [];
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.questions = getBaiTap();
    console.log(this.questions);
  }

  async openQuestions(num: any) {
    const modal = await this.modalController.create({
      component: BaitapDetailComponent,
      componentProps: {
        num
      }
    });
    return await modal.present();
  }

}
