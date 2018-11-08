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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LinesProvider } from './../../providers/lines/lines';
import { SeatSelectionPage } from '../seat-selection/seat-selection';
var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams, linesProv, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.linesProv = linesProv;
        this.loadingCtrl = loadingCtrl;
        this.busca = [];
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        this.busca = this.navParams.data.busca;
        this.getLines();
    };
    ResultPage.prototype.goToSeatSelectionPage = function () {
        this.navCtrl.push(SeatSelectionPage);
    };
    ResultPage.prototype.getLines = function () {
        this.linesProv.getLines(1, 10, this.busca['origem'], this.busca['destino'], null, null)
            .then(function (data) {
            console.log(data);
        });
    };
    ResultPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-result',
            templateUrl: 'result.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LinesProvider,
            LoadingController])
    ], ResultPage);
    return ResultPage;
}());
export { ResultPage };
//# sourceMappingURL=result.js.map