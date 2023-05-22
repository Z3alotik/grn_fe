import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { CardComponent } from './resuable/card/card.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { RegisterPageComponent } from './features/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRegisterService } from './services/login_register_service';
import { EventCardComponent } from './features/event-card/event-card.component';
import { DateTimeCounterComponent } from './resuable/date-time-counter/date-time-counter.component';
import { CreateEventModalComponent } from './features/create-event-modal/create-event-modal.component';
import { AddressFormComponent } from './resuable/address-form/address-form.component';
import { EventService } from './services/event_service';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CardComponent,
    LoginPageComponent,
    RegisterPageComponent,
    EventCardComponent,
    DateTimeCounterComponent,
    CreateEventModalComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [LoginRegisterService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
