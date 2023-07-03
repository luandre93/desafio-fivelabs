import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { IVeiculo } from "../interfaces/Veiculo";
import veiculoStore from "../stores/veiculoStore"
import Produto from './Produto';
import "../css/ViewBox.css";


const ViewBox: React.FC = observer(() => {
    useEffect(() => {
        veiculoStore.obterListaVeiculos();
    }, []);

    return (
        <>
            <div className="mt-3 mb-5 bg-dark border-x-y-0-5 rounded-lg sm:grid lg sm:grid-cols-4 sm:gap-3">
                {veiculoStore.listaVeiculos.map((veiculo: IVeiculo) => (
                    <Produto veiculo={veiculo} key={veiculo.id} />
                ))}
            </div>
        </>
    )
})

export default ViewBox;