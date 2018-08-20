import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-passenger-confirmation',
  templateUrl: 'passenger-confirmation.html',
})
export class PassengerConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public passengers = [];
  public seatsSelected = [];

  ionViewDidLoad() {
    this.passengers = this.navParams.data.informations;
    this.seatsSelected = this.navParams.data.seatsSelected;

    for(let item of this.passengers){
    	switch (item.genero) {
    		case "masc":
    			item.genero = 'Masculino';
    			break;
    		case "femi":
    			item.genero = "Feminino";
    			break
    		default:
    			item.genero = "Outro";
    			break;
    	}
    }
  }

  goToLoginPage(){
  	this.navCtrl.push(LoginPage);
  }

}
