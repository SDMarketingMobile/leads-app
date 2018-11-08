import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { RegisterPage } from '../register/register';

import { LoginProvider } from './../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				public loginProv: LoginProvider, 
				public appCtrl: App,
				public alertCtrl: AlertController,
				public viewCtrl: ViewController,
				public modalCtrl: ModalController,
				public loadingCtrl: LoadingController) {
	}

	public email = "";
	public password = "";

	doLogin(type){
		let loader = this.loadingCtrl.create({
			content: "Aguarde! Fazendo Login..."
		});
		loader.present();
		
		if(this.email == ""){
			loader.dismiss();
			const alert = this.alertCtrl.create({
				title: '',
				subTitle: 'Email inválido',
				buttons: ['OK']
			});
			alert.present();
			return false;
		} else if(this.password == ""){
			loader.dismiss();
			const alert = this.alertCtrl.create({
				title: '',
				subTitle: 'Senha inválida',
				buttons: ['OK']
			});
			alert.present();
			return false;
		} else {
			this.loginProv.doLogin(this.email, this.password, type)
				.then(resp => {
					loader.dismiss();
					this.dismissModal('ok');
					localStorage.setItem('app.leads.user.data', JSON.stringify(resp))
				})
				.catch(error => {
					loader.dismiss();
					const alert = this.alertCtrl.create({
						title: '',
						subTitle: error['_body'],
						buttons: ['OK']
					});
					alert.present();
					return false;
				});
		}
	}

	goToRegisterPage(){
		const modal = this.modalCtrl.create(RegisterPage);
			modal.onDidDismiss(result => {
				if (result != null){
					this.email = result['email'];
					this.password = result['password'];
					this.doLogin('customer');
				}
			});
		modal.present();
	}

	dismissModal(data) {
		this.viewCtrl.dismiss(data);
	}
}
