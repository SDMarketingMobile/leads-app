var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AdvancedSearchPage } from '../pages/advanced-search/advanced-search';
import { ResultPage } from '../pages/result/result';
import { SeatSelectionPage } from '../pages/seat-selection/seat-selection';
import { PassengerInformationPage } from '../pages/passenger-information/passenger-information';
import { PassengerConfirmationPage } from '../pages/passenger-confirmation/passenger-confirmation';
import { CheckoutPage } from '../pages/checkout/checkout';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PageUtilProvider } from '../providers/page-util/page-util';
import { DatePickerModule } from 'ion-datepicker';
import { HttpModule } from '@angular/http';
import { LinesProvider } from '../providers/lines/lines';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                AboutPage,
                ContactPage,
                HomePage,
                TabsPage,
                AdvancedSearchPage,
                ResultPage,
                SeatSelectionPage,
                PassengerInformationPage,
                PassengerConfirmationPage,
                CheckoutPage,
                RegisterPage,
                LoginPage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                DatePickerModule,
                HttpModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                AboutPage,
                ContactPage,
                HomePage,
                TabsPage,
                AdvancedSearchPage,
                ResultPage,
                SeatSelectionPage,
                PassengerInformationPage,
                PassengerConfirmationPage,
                CheckoutPage,
                RegisterPage,
                LoginPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                PageUtilProvider,
                LinesProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map