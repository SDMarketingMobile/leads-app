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
import { ResultPage } from '../result/result';
var AdvancedSearchPage = /** @class */ (function () {
    function AdvancedSearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.busca = [];
    }
    AdvancedSearchPage.prototype.ionViewDidLoad = function () {
        this.busca = this.navParams.data.busca;
    };
    AdvancedSearchPage.prototype.goToResultPage = function () {
        this.navCtrl.push(ResultPage, { 'busca': this.busca });
    };
    AdvancedSearchPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-advanced-search',
            templateUrl: 'advanced-search.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], AdvancedSearchPage);
    return AdvancedSearchPage;
}());
export { AdvancedSearchPage };
//# sourceMappingURL=advanced-search.js.map