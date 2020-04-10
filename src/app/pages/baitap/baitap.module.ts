import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaitapPageRoutingModule } from './baitap-routing.module';

import { BaitapPage } from './baitap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaitapPageRoutingModule
  ],
  declarations: [BaitapPage]
})
export class BaitapPageModule {}
