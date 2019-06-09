import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormClientComponent } from './form-client/form-client.component';
import { ListClientComponent } from './list-client/list-client.component';

@NgModule({
  declarations: [
    AppComponent,
    FormClientComponent,
    ListClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
