import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassengerConfirmationPage } from './passenger-confirmation';

@NgModule({
  declarations: [
    PassengerConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(PassengerConfirmationPage),
  ],
})
export class PassengerConfirmationPageModule {}
