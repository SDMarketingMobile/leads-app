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
import * as _ from 'underscore';
import * as l from 'lodash';
// Pages
import { PassengerInformationPage } from '../passenger-information/passenger-information';
/**
 * Generated class for the SeatSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeatSelectionPage = /** @class */ (function () {
    function SeatSelectionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selecionados = [];
        this.arr_seats = [];
        this.arr_seats2 = [];
    }
    SeatSelectionPage.prototype.ionViewDidLoad = function () {
        this.arr_seats = [
            { assento: 1, selected: 2 },
            { assento: 2, selected: 0 },
            { assento: 3, selected: 2 },
            { assento: 4, selected: 0 },
            { assento: 5, selected: 0 },
            { assento: 6, selected: 0 },
            { assento: 7, selected: 0 },
            { assento: 8, selected: 2 },
            { assento: 9, selected: 2 },
            { assento: 10, selected: 2 },
            { assento: 11, selected: 2 },
            { assento: 12, selected: 2 },
            { assento: 13, selected: 2 },
            { assento: 14, selected: 2 },
            { assento: 15, selected: 0 },
            { assento: 16, selected: 0 },
            { assento: 17, selected: 2 },
            { assento: 18, selected: 0 },
            { assento: 19, selected: 0 },
            { assento: 20, selected: 2 },
            { assento: 21, selected: 0 },
            { assento: 22, selected: 0 }
        ];
        this.arr_seats2 = [
            { assento: 23, selected: 2 },
            { assento: 24, selected: 2 },
            { assento: 25, selected: 0 },
            { assento: 26, selected: 0 },
            { assento: 27, selected: 0 },
            { assento: 28, selected: 2 },
            { assento: 29, selected: 0 },
            { assento: 30, selected: 0 },
            { assento: 31, selected: 0 },
            { assento: 32, selected: 0 },
            { assento: 33, selected: 2 },
            { assento: 34, selected: 2 },
            { assento: 35, selected: 0 },
            { assento: 36, selected: 0 },
            { assento: 37, selected: 2 },
            { assento: 38, selected: 0 },
            { assento: 39, selected: 0 },
            { assento: 40, selected: 0 },
            { assento: 41, selected: 2 },
            { assento: 42, selected: 2 }
        ];
        this.arr_seats = l.chunk(this.arr_seats, 2);
        this.arr_seats2 = l.chunk(this.arr_seats2, 2);
    };
    SeatSelectionPage.prototype.selectSeat = function (item) {
        if (item.selected == 0) {
            item.selected = 1;
            this.selecionados.push(item);
        }
        else if (item.selected == 1) {
            item.selected = 0;
            var index = this.selecionados.indexOf(item);
            this.selecionados.splice(index, 1);
        }
        else {
            return false;
        }
        this.selecionados = _.sortBy(this.selecionados, function (o) { return o.assento; });
    };
    SeatSelectionPage.prototype.goToPagePassengerInf = function () {
        var select = 0;
        for (var _i = 0, _a = this.arr_seats; _i < _a.length; _i++) {
            var obj = _a[_i];
            for (var _b = 0, obj_1 = obj; _b < obj_1.length; _b++) {
                var item = obj_1[_b];
                if (item['selected'] != undefined && item['selected'] != 0 && item['selected'] == 1) {
                    select++;
                }
            }
        }
        for (var _c = 0, _d = this.arr_seats2; _c < _d.length; _c++) {
            var obj = _d[_c];
            for (var _e = 0, obj_2 = obj; _e < obj_2.length; _e++) {
                var item = obj_2[_e];
                if (item['selected'] != undefined && item['selected'] != 0 && item['selected'] == 1) {
                    select++;
                }
            }
        }
        if (select > 0)
            this.navCtrl.push(PassengerInformationPage, { seatsSelected: this.selecionados });
        else
            alert('Selecione ao menos um assento');
    };
    SeatSelectionPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-seat-selection',
            templateUrl: 'seat-selection.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SeatSelectionPage);
    return SeatSelectionPage;
}());
export { SeatSelectionPage };
//# sourceMappingURL=seat-selection.js.map