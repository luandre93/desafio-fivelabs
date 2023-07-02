import React from 'react';
import { Link } from 'react-router-dom';
import { Veiculo } from "../interfaces/Veiculo";

interface Props {
    veiculo: Veiculo;
}

const Produto: React.FC<Props> = ({ veiculo }) => {
    return (
        <>
            <div className="m-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" key={veiculo.id}>
                <a href="#!">
                    <img className="sm:h-64 sm:w-96 rounded-t-lg" src={veiculo.image} alt="" />
                </a>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {veiculo.name}
                    </h5>
                    <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Modelo: {veiculo.model}</p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Fabricante: {veiculo.manufacturer}</p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Carga: {veiculo.cargo_capacity}</p>
                    </div>
                    <h6 className='text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'> {veiculo.cost_in_credits == 'unknown' ? '' : "R$ " + veiculo.cost_in_credits}</h6>
                    <div className='block text-center items-center justify-center text-base font-semibold dark:text-white'>

                        {veiculo.cost_in_credits != 'unknown' ?
                            <button
                                type="button"
                                className="mb-2 mt-5 block w-full rounded bg-primary px-6 pb-2 pt-2.5 
                                            text-xs font-medium uppercase leading-normal bg-slate-500 text-gray-50 hover:bg-green-600">
                                <Link to={`/checkout/${veiculo.id}`}> Comprar</Link>
                            </button>
                            :
                            <button
                                type="button"
                                disabled
                                className="mb-2 mt-14 block w-full rounded bg-primary px-6 pb-2 pt-2.5 
                                        text-xs font-medium uppercase leading-normal bg-red-500 text-gray-50">
                                Fora de estoque
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Produto;
