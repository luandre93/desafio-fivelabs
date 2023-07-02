import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Veiculo } from "../interfaces/Veiculo";
import VeiculoStore from "../stores/veiculoStore"
import Produto from './Produto';
import "../css/ViewBox.css";


const ViewBox: React.FC = observer(() => {
    const { listaVeiculos, obterListaVeiculos } = VeiculoStore;

    useEffect(() => {
        obterListaVeiculos();
    }, [obterListaVeiculos]);

    return (
        <>
            <div className="mt-3 mb-5 bg-dark border-x-y-0-5 rounded-lg sm:grid sm:grid-cols-4 sm:gap-3">
                {listaVeiculos.map((veiculo: Veiculo) => (
                    <Produto veiculo={veiculo} key={veiculo.id} />
                ))}
            </div>
        </>
    )
})

export default ViewBox;