import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeatSelectionPage } from '../seat-selection/seat-selection';


/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  goToSeatSelectionPage(){
    this.navCtrl.push(SeatSelectionPage);
  }

}
