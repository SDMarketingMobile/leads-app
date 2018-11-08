import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { CheckoutPage } from '../checkout/checkout';

import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-passenger-confirmation',
  templateUrl: 'passenger-confirmation.html',
})
export class PassengerConfirmationPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController
            ){}

  public data = [];

  ionViewDidLoad() {
    this.data = this.navParams.data;

    if(this.data['passengers']){
      for(let item of this.data['passengers']){
        item.birth_date = moment(item.birth_date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        switch (item.gender) {
          case "male":
            item.genero = 'Masculino';
            break;
          case "female":
            item.genero = "Feminino";
            break
          default:
            item.genero = "Outro";
            break;
        }
      }
    }
  }

  verificaLogin(){
    var customer = localStorage.getItem('app.leads.user.data');
    customer = JSON.parse(customer);
    if (customer)
      this.goToCheckoutPage();
    else
      this.goToLoginModal();
  }

  goToLoginModal(){
    const modal = this.modalCtrl.create(LoginPage);
      modal.onDidDismiss(result => {
        if(result != null) {
          this.goToCheckoutPage();
        }
      });
      modal.present();
  }

  goToCheckoutPage(){
    this.navCtrl.push(CheckoutPage, this.data);
  }

}
