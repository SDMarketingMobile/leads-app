import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-qrcode-modal',
  templateUrl: 'qrcode-modal.html',
})
export class QrcodeModalPage {

  constructor(public navCtrl: NavController, 
  			public navParams: NavParams,
  			public viewCtrl: ViewController) {
  }

  public sale;
  public qrData = null;
  public createdCode = null;
  ionViewDidLoad(){
  	this.sale = this.navParams.data;
  	this.qrData = this.sale['id'];
  	this.createCode();
  }

  createCode(){
    this.createdCode = this.qrData;
  }

	dismissModal() {
		this.viewCtrl.dismiss();
	}
}