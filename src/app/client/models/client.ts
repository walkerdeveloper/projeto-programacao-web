export class Client {

    id: number;
    nome: string;
    email: string;
    cpf: string;
    senha: string;
    telefone: string;

    constructor(init?: Partial<Client>) {
        Object.assign(this, init);
    }
}
