import React from 'react';
import { observer } from 'mobx-react';
import Produto from './Produto';
import checkoutStore from '../stores/checkoutStore';
import Formulario from './Formulario';

const Checkout: React.FC = observer(() => {

    return (
        <>
            <div className="mt-3 mb-5 bg-dark border-x-y-0-5 rounded-lg sm:grid sm:grid-cols-2 sm:gap-3">
                <div className='border-x-y m-2 border-x-y-0-5'>
                    <Formulario />
                </div>
                <div className='border-x-y m-2 border-x-y-0-5 '>
                    <h1 className='text-white text-2xl text-center pb-3 mt-5'>Veículo a Comprar</h1>
                    {
                        checkoutStore.itemCompra ?
                            <div className='border-x-y mt-2 border-x-y-0-5 mb-5 max-w-sm mx-auto'>
                                <Produto veiculo={checkoutStore.itemCompra} botaoFalse />
                            </div>
                            :
                            <div className='my-24'>
                                <h4 className='text-white text-1xl text-center pb-3 m-5'>Não existe nenhum veiculo selecionado.</h4>
                            </div>
                    }
                </div>
            </div>
        </>
    )
})

export default Checkout;