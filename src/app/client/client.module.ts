import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientComponent } from './client.component';
import { ClientService } from './client.service';
import { FormClientComponent } from './form-client/form-client.component';
import { ListClientComponent } from './list-client/list-client.component';

@NgModule({
    declarations: [ClientComponent, ListClientComponent, FormClientComponent],
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
    exports: [],
    providers: [ClientService],
})
export class ClientModule { }
