import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-checkout-success',
  templateUrl: 'checkout-success.html',
})
export class CheckoutSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHomePage(){
    this.navCtrl.setRoot(HomePage, 'goToMySales');
  }

}
