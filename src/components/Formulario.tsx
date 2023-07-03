import React from 'react';
import { observer } from "mobx-react";
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup'
import Input from './Input';
import checkoutStore from '../stores/checkoutStore';
import { IFormulario } from '../interfaces/Formulario';

const Formulario: React.FC = observer(() => {
    /*   const handleCEP = (event: React.ChangeEvent<HTMLInputElement>) => {
          const valor = Number(event.target.value)
          checkoutStore.setCEP(valor);
      } */

    const formulario: IFormulario = checkoutStore.formulario;

    const validationSchema = Yup.object({
        nome: Yup.string().min(5, "O campo precisa ter pelo menos 5 caracters.").required("Campo obrigatório!"),
        email: Yup.string().email("E-mail Inválido.").required("Campo obrigatório!"),
        telefone: Yup.string().required("Campo obrigatório!"),
        cep: Yup.string().test('sevenDigits', 'Deve conter 7 dígitos', (value) => {
            if (value && value.length === 8) {
                checkoutStore.puxarCEP(Number(value));
            }
            return true;
        }),
        bairro: Yup.string().required("Campo obrigatório!"),
        uf: Yup.string().required("Campo obrigatório!"),
        endereco: Yup.string().required("Campo obrigatório!"),
        numeroCasa: Yup.string().required("Campo obrigatório!"),
        complemento: Yup.string(),
        cidade: Yup.string().required("Campo obrigatório!"),
        numeroCartao: Yup.string().required("Campo obrigatório!"),
        validadeCartao: Yup.string().required("Campo obrigatório!"),
        nomeCartao: Yup.string().required("Campo obrigatório!"),
        cvvCartao: Yup.string().required("Campo obrigatório!"),
    });

    const enviarDados = (values: IFormulario, { setSubmitting }: FormikHelpers<IFormulario>) => {
        console.log(values);
        setSubmitting(false);
    };


    return (
        <>
            <Formik
                onSubmit={enviarDados}
                initialValues={formulario}
                validationSchema={validationSchema}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <h1 className='text-white text-2xl text-center my-5'>Informações Pessoais</h1>
                        <Input label='Nome' name='nome' type='text' required />
                        <Input label='Email' name='email' type='email' required />
                        <Input label='Telefone' name='telefone' type='tel' required />
                        <Input label='CEP' name='cep' type='text' required />
                        <Input label='Endereço' value={checkoutStore.formulario.endereco} name='endereco' type='text' required />
                        <Input label='Bairro' value={checkoutStore.formulario.bairro} name='bairro' type='text' required />
                        <Input label='Número' name='numeroCasa' type='number' required />
                        <Input label='UF' value={checkoutStore.formulario.uf} name='uf' type='text' required />
                        <Input label='Complemento' name='complemento' type='text' />
                        <Input label='Cidade' value={checkoutStore.formulario.cidade} name='cidade' type='text' required disabled={!values.endereco} />
                        <h1 className='text-white text-2xl text-center my-5'>Informações de Pagamento</h1>
                        <Input label='Nome do Cartão' name='nomeCartao' type='text' required />
                        <Input label='Número do Cartão' name='numeroCartao' type='number' required />
                        <Input label='Validade do Cartão' name='validadeCartao' type='date' required />
                        <Input label='CVV' name='cvvCartao' type='number' required />
                        <div className='col-auto mx-2 my-2 flex justify-center'>
                            <button className='bg-green-600 text-gray-200 rounded-sm text-sm p-2 px-10' type='submit' disabled={isSubmitting}>Validar Compra</button>
                        </div>

                    </Form>
                )}
            </Formik>
        </>
    )

})


export default Formulario;
