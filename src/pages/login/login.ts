import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CheckoutPage } from '../checkout/checkout';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
   
  }

	goToCheckoutPage(){
		this.navCtrl.push(CheckoutPage);
	}

	goToRegisterPage(){
		this.navCtrl.push(RegisterPage);
	}

}
