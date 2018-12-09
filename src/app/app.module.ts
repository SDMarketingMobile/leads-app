import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
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
import { CheckoutSuccessPage } from '../pages/checkout-success/checkout-success';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UserSalesPage } from '../pages/user-sales/user-sales';
import { SaleDetailsPage } from '../pages/sale-details/sale-details';
import { QrcodeModalPage } from '../pages/qrcode-modal/qrcode-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PageUtilProvider } from '../providers/page-util/page-util';
import { DatePickerModule } from 'ion-datepicker';

import { HttpModule } from '@angular/http';
import { LinesProvider } from '../providers/lines/lines';
import { RoutesProvider } from '../providers/routes/routes';

import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LoginProvider } from '../providers/login/login';
import { UsersProvider } from '../providers/users/users';
import { UtilsProvider } from '../providers/utils/utils';
import { SaleProvider } from '../providers/sale/sale';
import { NgxQRCodeModule } from 'ngx-qrcode2';

registerLocaleData(localePtBr);

@NgModule({
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
    LoginPage,
    CheckoutSuccessPage,
    UserSalesPage,
    SaleDetailsPage,
    QrcodeModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DatePickerModule,
    HttpModule,
    NgxQRCodeModule
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
    LoginPage,
    CheckoutSuccessPage,
    UserSalesPage,
    SaleDetailsPage,
    QrcodeModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: "pt-BR"},
    PageUtilProvider,
    LinesProvider,
    RoutesProvider,
    LoginProvider,
    UsersProvider,
    UtilsProvider,
    SaleProvider
  ]
})
export class AppModule {}
