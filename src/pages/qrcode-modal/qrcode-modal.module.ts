import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrcodeModalPage } from './qrcode-modal';

@NgModule({
  declarations: [
    QrcodeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(QrcodeModalPage),
  ],
})
export class QrcodeModalPageModule {}
