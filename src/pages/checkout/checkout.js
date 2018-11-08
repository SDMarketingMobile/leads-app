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
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hideShowCC = false;
        this.hideShowCD = false;
        this.hideShowBL = false;
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
    };
    CheckoutPage.prototype.btnActivate = function (cc, cd, bl, a) {
        switch (a) {
            case 1:
                if (cc._color === 'light') {
                    cc.color = 'primary';
                    cd.color = 'light';
                    bl.color = 'light';
                }
                else {
                    cc.color = 'light';
                }
                break;
            case 2:
                if (cd._color === 'light') {
                    cd.color = 'primary';
                    cc.color = 'light';
                    bl.color = 'light';
                }
                else {
                    cd.color = 'light';
                }
                break;
            case 3:
                if (bl._color === 'light') {
                    bl.color = 'primary';
                    cd.color = 'light';
                    cc.color = 'light';
                }
                else {
                    bl.color = 'light';
                }
                break;
            default:
                cd.color = 'light';
                cc.color = 'light';
                bl.color = 'light';
                break;
        }
    };
    CheckoutPage.prototype.hideShowBlock = function (div) {
        switch (div) {
            case "ccp":
                this.hideShowCC = !this.hideShowCC;
                this.hideShowCD = false;
                this.hideShowBL = false;
                break;
            case "cdp":
                this.hideShowCD = !this.hideShowCD;
                this.hideShowCC = false;
                this.hideShowBL = false;
                break;
            case "blp":
                this.hideShowBL = !this.hideShowBL;
                this.hideShowCD = false;
                this.hideShowCC = false;
                break;
            default:
                this.hideShowBL = false;
                this.hideShowCD = false;
                this.hideShowCC = false;
                break;
        }
    };
    CheckoutPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-checkout',
            templateUrl: 'checkout.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], CheckoutPage);
    return CheckoutPage;
}());
export { CheckoutPage };
//# sourceMappingURL=checkout.js.map