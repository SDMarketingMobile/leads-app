import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeatSelectionPage } from './seat-selection';

@NgModule({
  declarations: [
    SeatSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(SeatSelectionPage),
  ],
})
export class SeatSelectionPageModule {}
