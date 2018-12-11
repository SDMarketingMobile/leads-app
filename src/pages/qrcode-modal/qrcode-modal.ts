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

  public qrData = null;
  public createdCode = null;
  public sale = [];
  public route = [];
  public line = [];
  public line_origin = [];
  public line_destiny = [];
  public seats = [];
  public totalCompra = 0;
  public formaPagamento: any;
  

  ionViewDidLoad(){
  	this.sale = this.navParams.data;
    this.qrData = this.sale['id'];
    this.route = this.sale['route'];
    this.line = this.route['line'];
    this.line_origin = this.line['origin'];
    this.line_destiny = this.line['destiny'];
    this.seats = this.sale['seats'];
    this.totalCompra = (this.seats.length * this.line['person_price']);
    
  	this.createCode();
  }

  createCode(){
    this.createdCode = this.qrData;
  }

	dismissModal() {
		this.viewCtrl.dismiss();
	}
}