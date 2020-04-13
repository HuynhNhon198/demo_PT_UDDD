import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import getBaiTap from 'src/app/data/baitap';
import { $ } from 'protractor';

@Component({
  selector: 'app-baitap-detail',
  templateUrl: './baitap-detail.component.html',
  styleUrls: ['./baitap-detail.component.scss'],
})
export class BaitapDetailComponent {
  @Input()num: number;
  baitap: any;
  cauhoi: {
    question: string;
    img: string;
    answers: {
      answer: string;
      correct?: boolean;
      isChecked?: boolean;
    }[]
  };
  caudung = 0;
  i = 0;
  ketqua: string;
  constructor(
    private modalController: ModalController
  ) { }

  ionViewDidEnter() {
    const data = getBaiTap();
    this.baitap = data.find(x => x.num === this.num);
    this.i = 0;
    this.next();
  }

  dismiss() {
    this.modalController.dismiss();
  }
    next() {
    // kiểm tra câu đúng
    if (this.i > 0) {
      const indexChecked = this.cauhoi.answers.findIndex(x => x.isChecked);
      const indexCorrect = this.cauhoi.answers.findIndex(x => x.correct);
      if (indexChecked === indexCorrect) {
        console.log('dung');
        this.caudung++;
      }
    }

    // chuyển câu hỏi
    this.cauhoi = this.baitap.questions[this.i];
    this.i++;
    if (this.cauhoi === undefined) {
      this.submit();
    }
  }

  // hàm chạy khi chọn/bỏ câu trả lời
  selectCauTraLoi(item, i) {
    if (item.isChecked) {
      for (const index in this.cauhoi.answers) {
        if (index !== i.toString()) {
          this.cauhoi.answers[index].isChecked = false;
        }
      }
    }
  }

  // hàm chấm điểm
  submit() {
    const quantityQuestions = this.baitap.questions.length;
    this.ketqua = (`${this.caudung} / ${quantityQuestions}`);
  }

}
