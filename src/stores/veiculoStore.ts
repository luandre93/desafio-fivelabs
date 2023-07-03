import { makeAutoObservable } from "mobx";
import axios from "axios";
import ImageStore from "./imageStore";
import { IVeiculo } from "../interfaces/Veiculo";

class VeiculoStore {
    listaVeiculos: IVeiculo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async obterListaVeiculos() {
        try {
            const { imagens } = ImageStore;
            const response = await axios.get("https://swapi.dev/api/vehicles/?format=json");
            const lista: IVeiculo[] = response.data.results;
            lista.forEach((item: IVeiculo, index: number) => {
                item.image = imagens[index];
                item.id = index;
            });
            this.listaVeiculos = lista;
        } catch (error) {
            console.error(error);
        }
    }
}

const veiculoStore = new VeiculoStore();
export default veiculoStore;