import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PassengerConfirmationPage } from '../passenger-confirmation/passenger-confirmation';

@IonicPage()
@Component({
  selector: 'page-passenger-information',
  templateUrl: 'passenger-information.html',
})
export class PassengerInformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public seats: any;
  public passangers: any;

	ionViewDidLoad() {
		this.getPassengers();
	}

	getPassengers(){
		this.passangers = [];
		this.seats = this.navParams.data.seatsSelected;
		for (let item of this.seats){
			if (item['selected'] != undefined && item['selected'] != 0 && item['selected'] == 1) {
				this.passangers.push(item);
			}
		}
	}

	goToConfirmationPage(){
		this.navCtrl.push(PassengerConfirmationPage, {'informations':this.passangers, 'seatsSelected':this.seats});
	}

}
