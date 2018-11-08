var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
var LinesProvider = /** @class */ (function () {
    function LinesProvider(http) {
        this.http = http;
        this.API_URL = 'http://192.168.0.12:3000/';
    }
    LinesProvider.prototype.getLines = function (offset, limit, origem, destino, dta_ida, dta_volta) {
        var _this = this;
        var filter = "";
        if (origem)
            filter += "&city_origin=" + origem;
        if (destino)
            filter += "&city_destiny=" + destino;
        if (dta_ida)
            filter += "&" + dta_ida;
        if (dta_volta)
            filter += "&" + dta_volta;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_URL + 'lines?offset=' + offset + '&limit=' + limit + filter)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    LinesProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], LinesProvider);
    return LinesProvider;
}());
export { LinesProvider };
//# sourceMappingURL=lines.js.map