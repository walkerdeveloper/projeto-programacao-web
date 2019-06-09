import { Client } from './client.model';

export class ClientService{
    constructor(){}

    clis: Client[] = [ {
        id: 1,
        nome: "Gabriel",
        email: "gabriel@email.com",
        cpf: '1236456',
        senha: "123",
        telefone: "3333-3333"
    },
    {
        id: 2,
        nome: "Anderson",
        email: "anderson@email.com",
        cpf: '654321',
        senha: "321",
        telefone: "2222-2222"
    }]

    clients(): Client[]{
        return this.clis
    }
}