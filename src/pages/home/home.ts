import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';

import { AdvancedSearchPage } from '../advanced-search/advanced-search';
import { AboutPage } from '../about/about';
import { ResultPage } from '../result/result';

import { UtilsProvider } from './../../providers/utils/utils';
import { UserSalesPage } from '../user-sales/user-sales';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http, 
    public loadingCtrl: LoadingController, 
    private utilProv: UtilsProvider,
    public modalCtrl: ModalController
  ){}

  ionViewDidLoad(){
    this.data = localStorage.getItem('app.leads.user.data');
    if(this.navParams.data == 'goToMySales'){
      this.navCtrl.push(UserSalesPage);
    }
  }

  public data = null;
  public busca = [];
  public cidades = [];

  goToCustomerSalesPage() {
    this.navCtrl.push(UserSalesPage);
  }

  goToAdvancedSearchPage(){
    this.navCtrl.push(AdvancedSearchPage, {'busca':this.busca});
    this.busca['destino'] = "";
  }

  goToResultPage(destino){
    this.busca['destino'] = destino;
    this.cidades = [];
    this.navCtrl.push(ResultPage, {'busca':this.busca});
  }

  goToAboutPage(){
    this.navCtrl.setRoot(AboutPage);
  }

  logout(){
    this.data = null;
		localStorage.removeItem('app.leads.user.data');
  }
  
  login(){
    const modal = this.modalCtrl.create(LoginPage);
      modal.onDidDismiss(result => {
        if(result != null) {
          this.data = localStorage.getItem('app.leads.user.data');
          this.goToCustomerSalesPage();
        }
      });
      modal.present();
  }

  getCities(offset, limit){
    this.cidades = [];
    var filter = "";

		if (this.busca['destino'])
      filter += "&filter="+this.busca['destino'];
    
    if (this.busca['destino'].length > 2){
      this.http.get(this.utilProv.urlApi()+'cities?offset='+ offset +'&limit='+ limit + filter)
        .subscribe(res => {
          if (res['_body']) {
            var body = JSON.parse(res['_body']);
            this.cidades = body['records'];
          }
        }, (err) => {
        });  
    }
    
  }

}
