import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sale-details',
  templateUrl: 'sale-details.html',
})
export class SaleDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public sale = [];
  public route = [];
  public line = [];
  public seats = [];
  public totalCompra = 0;
  public formaPagamento: any;

  ionViewDidLoad() {
    this.sale = this.navParams.data;
    this.route = this.sale['route'];
    this.line = this.route['line'];
    this.seats = this.sale['seats'];
    this.totalCompra = (this.seats.length * this.line['person_price']);

    switch (this.sale['payment_method']){
      case 'bank_slip':
        this.formaPagamento = "Boleto Bancário";
        break;
      case 'credit_card':
        this.formaPagamento = "Cartão de Crédito";
    }
  }

}
