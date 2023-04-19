import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { ConfirmationComponent } from './book/confirmation/confirmation.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeadernavComponent } from './headernav/headernav.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BookedTicketsComponent } from './book/booked-tickets/booked-tickets.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinloaderInterceptor } from './interceptor/spinloader.interceptor';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NgSelectModule } from '@ng-select/ng-select';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    BookComponent,
    ConfirmationComponent,
    HeadernavComponent,
    BookedTicketsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    FlexLayoutModule,
    ModalModule.forRoot(),
    NgxQRCodeModule,
    NgSelectModule,
    SlickCarouselModule,
    FontAwesomeModule
  ],
  providers: [  
    {provide: HTTP_INTERCEPTORS, useClass: SpinloaderInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
