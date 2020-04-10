import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LythuyetPageRoutingModule } from './lythuyet-routing.module';

import { LythuyetPage } from './lythuyet.page';
import { LythuyetDetailComponent } from 'src/app/component/lythuyet-detail/lythuyet-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LythuyetPageRoutingModule
  ],
  entryComponents: [
    LythuyetDetailComponent
  ],
  declarations: [LythuyetPage, LythuyetDetailComponent]
})
export class LythuyetPageModule {}
