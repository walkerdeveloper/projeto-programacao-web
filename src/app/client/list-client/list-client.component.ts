import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'cmo-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  @Input() client: Client
  
  

  constructor() {}

  ngOnInit() {
  }

}
