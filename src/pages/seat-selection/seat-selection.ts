import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeatSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seat-selection',
  templateUrl: 'seat-selection.html',
})
export class SeatSelectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public arr_seats = [
      { url: 'assets/imgs/seat-black.png'},
      { url: 'assets/imgs/seat-black.png'},
      { },
      { url: 'assets/imgs/seat-black.png'},
      { url: 'assets/imgs/seat-black.png'}
  ]

}
