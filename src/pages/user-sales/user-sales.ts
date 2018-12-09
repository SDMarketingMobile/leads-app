import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SaleProvider } from '../../providers/sale/sale';
import { SaleDetailsPage } from '../sale-details/sale-details';
import { QrcodeModalPage } from '../qrcode-modal/qrcode-modal';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user-sales',
  templateUrl: 'user-sales.html',
})
export class UserSalesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    private saleProv: SaleProvider,
    public modalCtrl: ModalController,
  ) {
    // Do nothing here...
  }

  public sales = [];

  ionViewDidLoad(){
   this.loadCustomerSales();
  }

  loadCustomerSales() {
    let loader = this.loadingCtrl.create({
			content: "Aguarde! Carregando Informações"
		});
    loader.present();
    
    let filter = [{
      key: "customer_id",
      value: JSON.parse(localStorage.getItem('app.leads.user.data')).id
    }];

    this.saleProv.getAll(1, 10, filter)
      .then(result => {
        this.sales = result['records'];
        loader.dismiss();
      })
      .catch((error) => {
        loader.dismiss();
        return false;
      });
  }

  goToSaleDetailPage(sale) {
    this.navCtrl.push(SaleDetailsPage, sale);
  }

  goToQrCodeModal(sale) {
    const modal = this.modalCtrl.create(QrcodeModalPage, sale);
      modal.onDidDismiss(result => {
      });
    modal.present();
  }
}
