import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { ClientService } from '../client.service';
import { Client } from '../models/client';

@Component({
  selector: 'cmo-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  private cliente: Client;

  get client(): Client {
    return this.cliente;
  }

  @Input()
  set client(client: Client) {

    if (client) {
      console.log('settando no form');

      const { nome,
        email,
        cpf,
        senha,
        telefone } = client;
      this.form.setValue({
        nome,
        email,
        cpf,
        senha,
        telefone
      });

      console.log(this.form.value);
    }
  }

  @Input() updateList: BehaviorSubject<any>;

  form: FormGroup;

  constructor(fb: FormBuilder, private clientService: ClientService) {
    this.form = fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      senha: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  save() {

    // Atualizar cliente
    if (this.client) {

      // obtem os dados do form
      const update = new Client({ id: this.client.id, ...this.form.value });
      this.clientService.update(update)
        .subscribe({
          next: updated => {
            console.log(updated);
            this.client = updated;
          },
          error: err => console.log(err)
        });
        // inserir client
    } else {

      // obtem os dados do form
      const newClient = new Client(...this.form.value);
      this.clientService.create(newClient)
        .subscribe({
          // avisa para a lista ser atualizada
          next: resp => this.updateList.next(true),
          error: err => console.log(err)
        });
    }
  }

}
