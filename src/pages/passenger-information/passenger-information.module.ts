import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassengerInformationPage } from './passenger-information';

@NgModule({
  declarations: [
    PassengerInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(PassengerInformationPage),
  ],
})
export class PassengerInformationPageModule {}
