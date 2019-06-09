import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Client } from './models/client';

// Url padrão
const api = 'subistituir_url';

@Injectable()
export class ClientService {
    constructor(private readonly http: HttpClient) { }

    clis: Client[] = [{
        id: 1,
        nome: 'Gabriel',
        email: 'gabriel@email.com',
        cpf: '1236456',
        senha: '123',
        telefone: '3333-3333'
    },
    {
        id: 2,
        nome: 'Anderson',
        email: 'anderson@email.com',
        cpf: '654321',
        senha: '321',
        telefone: '2222-2222'
    }];

    // Remover mock e substituir pelas tuas urls
    // Se tiver algum header ou parametro de url (http://url-do-endpoint/test?param=1) para passar
    // dá uma olhada naquele projeto q fiz, lá tem exemplo

    list(): Observable<Client[]> {

        // mock
        return of(this.clis);

        // return this.http.get<Client[]>(`${api}`);
    }

    // pode mudar o retorno se for necessário
    create(client: Client): Observable<Client | any> {

        // @mock
        return of(client);
        // return this.http.post(`${api}/colocar-o-resto-se-for-necessario`, client);
    }

    // pode mudar o retorno se for necessário
    delete(client: Client): Observable<void | any> {

        // @mock
        return of(client);
        // return this.http.delete<void>(`${api}/${client.id}`);
    }

    // pode mudar o retorno se for necessário
    update(client: Client): Observable<Client> {

        // @mock
        return of(client);
        // return this.http.put<Client>(`${api}/${client.id}`, client);
    }
}
