import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'cmo-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {
  
  @Input() client: Client
  constructor() { }

  ngOnInit() {
  }

}
