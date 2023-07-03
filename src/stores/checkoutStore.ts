import { makeAutoObservable, observable } from 'mobx'
import veiculoStore from "./veiculoStore";
import { IVeiculo } from '../interfaces/Veiculo';
import { IFormulario } from '../interfaces/Formulario';
import axios from 'axios';

class CheckoutStore {
    @observable itemCompra: IVeiculo | null = null;
    @observable formulario: IFormulario = {
        nome: "",
        email: "",
        telefone: undefined,
        cep: undefined,
        endereco: "",
        numeroCasa: undefined,
        complemento: "",
        cidade: "",
        uf: "",
        bairro: "",
        numeroCartao: undefined,
        validadeCartao: undefined,
        nomeCartao: "",
        cvvCartao: undefined
    }

    constructor() {
        makeAutoObservable(this);
    }

    async puxarCEP(cep: number) {
        try {
            const response = await axios.get("https://viacep.com.br/ws/" + cep + "/json/");
            const resultado = response.data;
            const { logradouro, localidade, uf, bairro } = resultado;
            this.formulario.cidade = localidade;
            this.formulario.uf = uf;
            this.formulario.bairro = bairro;
            this.formulario.endereco = logradouro;
            console.log(this.formulario)
        } catch (error) {
            console.error(error);
        }
    }

    adicionarProduto(id: number) {
        const veiculo = veiculoStore.listaVeiculos[id];
        if (veiculo !== null) {
            this.itemCompra = veiculo;
        }
    }
}

const checkoutStore = new CheckoutStore();
export default checkoutStore;