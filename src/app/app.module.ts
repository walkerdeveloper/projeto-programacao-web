import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormClientComponent } from './client/form-client/form-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { ClientService } from './client/client.service';

@NgModule({
  declarations: [
    AppComponent,
    FormClientComponent,
    ListClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
