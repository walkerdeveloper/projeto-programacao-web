import { Component, OnInit } from '@angular/core';
import { Client } from './client/client.model';
import { ClientService } from './client/client.service';

@Component({
  selector: 'cmo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  clients: Client[]

  constructor(private clientService: ClientService){ }

  ngOnInit(){
    this.clients = this.clientService.clients()
  }
}
