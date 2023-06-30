import React/* , { useContext } */ from 'react';
import { observer } from 'mobx-react';
import Store from '../stores/store';


const Checkout: React.FC = observer(() => {
    const { nome } = Store;

    return (
        <>
            {nome}
        </>
    )
})

export default Checkout;