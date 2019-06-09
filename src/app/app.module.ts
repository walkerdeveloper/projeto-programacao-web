import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CarModule } from './car/car.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ClientModule,
    CarModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
