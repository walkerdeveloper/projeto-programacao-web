import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { skip } from 'rxjs/operators';

import { ClientService } from '../client.service';
import { Client } from '../models/client';

@Component({
  selector: 'cmo-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: Client[];

  selectedClient: Client;

  @Input() updateList: BehaviorSubject<any>;

  @Output() selectedClientEvent: EventEmitter<Client> = new EventEmitter();

  constructor(private clientService: ClientService, ) { }

  ngOnInit() {

    // sempre q o comando updateList.next(coisa) for executado a lista será atualizada
    this.updateList.
    pipe(skip(1))
    .subscribe(() => {
      this._updateList();
    });

    this._updateList();
  }

  remove(client: Client) {
    this.clientService.delete(client)
      .subscribe({
        next: () => this._updateList(),
        error: err => console.log(err)
      });
  }

  edit(client: Client) {
    console.log('editar clickado');
    // envia o cliente a ser editado
    this.selectedClientEvent.emit(client);
  }

  private _updateList() {
    this.clientService.list()
      .subscribe({
        next: list => {
          this.clients = list;
          console.log('Lista atualizada!');
          console.log(list);
        },
        error: err => console.error(err)
      });
  }

}
