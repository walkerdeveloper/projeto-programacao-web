import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Client } from './models/client';

@Component({
    selector: 'cmo-name',
    templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {

    // toda vez q o updateList.next(coisa) for chamado vai atualizar a lista
    updateList = new BehaviorSubject(null);

    selectedClient: Client;

    constructor() { }

    ngOnInit(): void { }

    editClient(client: Client) {
        // obtém o cliente vindo do evento ( this.selectedClientEvent.emit(client); )
        // e seta na variavel q será input no component de form
        this.selectedClient = client;
        console.log('evento capturado');

    }
}
