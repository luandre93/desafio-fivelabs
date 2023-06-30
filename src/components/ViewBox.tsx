import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import "../css/ViewBox.css";
/* import Store from '../stores/store'; */
import ImagesStore from '../stores/imagesStore'

type Veiculo = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    image: string;
}


const ViewBox: React.FC = observer(() => {
    const [lista, setLista] = useState<Veiculo[]>([]);
    useEffect(() => {
        async function obterListaVeiculos() {
            try {
                const response = await axios.get('https://swapi.dev/api/vehicles/?format=json');
                const lista = response.data.results;
                const { imagens } = ImagesStore;
                for (let i = 0; i < lista.length; i++) {
                    lista[i].image = imagens[i];
                }
                setLista(lista);
                console.log(lista)
            } catch (error) {
                console.error(error);
            }
        }
        obterListaVeiculos();
    }, []);

    return (
        <>
            <div className='container mx-auto h-full'>
                <div className="w-full mt-10  bg-gray-500 py-10 flex items-center justify-center rounded-lg">
                    <h1 className="text-white text-3xl  rounded-sm"> Shopping StarWars - Veiculos</h1>
                </div>
                <div className="mt-5 mb-5">
                    {lista.map((veiculo, index) => (
                        <ul role="list" className="rounded-lg mt-2 shadow-md p-4 bg-slate-700 opacity-100">
                            <li className="flex justify-between gap-x-6 py-1 text-gray-50" key={index}>
                                <div className="flex gap-x-4">
                                    <img className="h-12 w-12 flex-none rounded-full" src={veiculo.image} alt="" />
                                    <div className="flex flex-col">
                                        <p className="text-lg font-semibold">Nome: {veiculo.name}</p>
                                        <p className="text-base">Modelo: {veiculo.model}</p>
                                        <p className="text-base">Fabricante: {veiculo.manufacturer}</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    ))}
                </div>
            </div>
        </>
    )
})

export default ViewBox;