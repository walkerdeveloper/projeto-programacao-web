import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientComponent } from './client.component';
import { FormClientComponent } from './form-client/form-client.component';
import { ListClientComponent } from './list-client/list-client.component';

@NgModule({
    declarations: [ClientComponent, ListClientComponent, FormClientComponent],
    imports: [ CommonModule ],
    exports: [],
    providers: [],
})
export class ClientModule { }
