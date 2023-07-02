import { observable } from 'mobx'

class CheckoutStore {
    // Informações Pessoais
    @observable nome: string | undefined;
    @observable email: string | undefined;
    @observable telefone: number | undefined;
    @observable cep: number | undefined;
    @observable endereco: string | undefined;
    @observable numeroCasa: number | undefined;
    @observable complemento: string | undefined;
    @observable cidade: string | undefined;
    // Informações do Cartão
    @observable numeroCartao: number | undefined;
    @observable validadeCartao: number | undefined;
    @observable nomeCartao: string | undefined;
    @observable cvvCartao: string | undefined;
}

const checkoutStore = new CheckoutStore();
export default checkoutStore;