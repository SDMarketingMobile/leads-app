var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
var PassengerConfirmationPage = /** @class */ (function () {
    function PassengerConfirmationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.passengers = [];
        this.seatsSelected = [];
    }
    PassengerConfirmationPage.prototype.ionViewDidLoad = function () {
        this.passengers = this.navParams.data.informations;
        this.seatsSelected = this.navParams.data.seatsSelected;
        for (var _i = 0, _a = this.passengers; _i < _a.length; _i++) {
            var item = _a[_i];
            switch (item.genero) {
                case "masc":
                    item.genero = 'Masculino';
                    break;
                case "femi":
                    item.genero = "Feminino";
                    break;
                default:
                    item.genero = "Outro";
                    break;
            }
        }
    };
    PassengerConfirmationPage.prototype.goToLoginPage = function () {
        this.navCtrl.push(LoginPage);
    };
    PassengerConfirmationPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-passenger-confirmation',
            templateUrl: 'passenger-confirmation.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], PassengerConfirmationPage);
    return PassengerConfirmationPage;
}());
export { PassengerConfirmationPage };
//# sourceMappingURL=passenger-confirmation.js.map