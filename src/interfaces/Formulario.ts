export interface IFormulario {
    nome: string;
    email: string;
    telefone: number | undefined;
    cep: number | undefined;
    endereco: string;
    numeroCasa: number | undefined;
    complemento: string;
    cidade: string;
    uf: string;
    bairro: string;
    numeroCartao: number | undefined;
    validadeCartao: number | undefined;
    nomeCartao: string;
    cvvCartao: number | undefined;
}