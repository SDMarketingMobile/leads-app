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
import { PassengerConfirmationPage } from '../passenger-confirmation/passenger-confirmation';
var PassengerInformationPage = /** @class */ (function () {
    function PassengerInformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PassengerInformationPage.prototype.ionViewDidLoad = function () {
        this.getPassengers();
    };
    PassengerInformationPage.prototype.getPassengers = function () {
        this.passangers = [];
        this.seats = this.navParams.data.seatsSelected;
        for (var _i = 0, _a = this.seats; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item['selected'] != undefined && item['selected'] != 0 && item['selected'] == 1) {
                this.passangers.push(item);
            }
        }
    };
    PassengerInformationPage.prototype.goToConfirmationPage = function () {
        this.navCtrl.push(PassengerConfirmationPage, { 'informations': this.passangers, 'seatsSelected': this.seats });
    };
    PassengerInformationPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-passenger-information',
            templateUrl: 'passenger-information.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], PassengerInformationPage);
    return PassengerInformationPage;
}());
export { PassengerInformationPage };
//# sourceMappingURL=passenger-information.js.map