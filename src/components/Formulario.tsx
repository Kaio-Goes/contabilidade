import { useContext, useEffect, useState } from 'react';
import Servico from '../core/Servicos';
import Botao from './Botao';
import Entrada from './Entrada';
import Status from './Status';
// import {enviarEmail} from "../../functions/index"

interface FormularioProps {
    formulario: Servico;
    formularioMudou?: (cliente: Servico) => void;
    cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
    //const {user} = useContext(AuthContext)

    const id = props.formulario?.id;
    const [numeroServico, setNumeroServico] = useState(
        props.formulario?.Numero_Servico ?? ''
    );
    const [nomeCliente, setNomeCliente] = useState(
        props.formulario?.Nome_Cliente ?? ''
    );
    const [descricao, setDescricao] = useState(
        props.formulario?.Descricao_Servico ?? ''
    );
    //const [status, setStatus] = useState(props.cliente?.status ?? '')
    const [emailCliente, setemailCliente] = useState(
        props.formulario?.Email_Cliente ?? ''
    );
    const [value, setValue] = useState(props.formulario?.Status);

    const validarInputs = (numeroServico, nomeCliente, descricao, emailCliente  ) => {
        if (
            numeroServico.length === 0 ||
            nomeCliente.length === 0 ||
            descricao.length === 0
            || emailCliente.length === 0 
            || emailCliente.indexOf('@') === -1
            || emailCliente.indexOf('.') === -1
            ) {
                return window.alert('Preencha todos os campos')
            }
                // else if(numeroServico.length !== 0 &&
                //     nomeCliente.length !== 0 &&
                //     descricao.length !== 0 && emailCliente.length !== 0){
                //     return props.formularioMudou?.(
                //         new Servico(
                //             numeroServico,
                //             nomeCliente,
                //             descricao,
                //             emailCliente,
                //             value,
                //             id
                //         )
                //         );    
                //     }
                props.formularioMudou?.(
                    new Servico(
                        numeroServico,
                        nomeCliente,
                        descricao,
                        emailCliente,
                        value,
                        id
                    )
                );
    };

        // useEffect(() => {
        //     console.log('Alguem mexeu nos values')
        //     validarInputs(numeroServico, nomeCliente, descricao, emailCliente)
        // }, [numeroServico, nomeCliente, descricao, emailCliente])

        // useEffect(() => {
        // let condicao = 1
        // if( condicao != 0) {
        //     validarInputs()
        // }
        // })

    return (
        <form>
            <Entrada
                texto="Número do Serviço"
                tipo="number"
                valor={numeroServico}
                valorMudou={setNumeroServico}
                className="mb-4"
            />
            <Entrada
                texto="Nome do Cliente"
                valor={nomeCliente}
                valorMudou={setNomeCliente}
                className="mb-4"
            />
            <Entrada
                texto="Descrição do Serviço"
                valor={descricao}
                valorMudou={setDescricao}
                className="mb-4"
            />
            <Entrada
                tipo="email"
                texto="E-mail do Cliente (exemplo@exemplo.com)"
                valor={emailCliente}
                valorMudou={setemailCliente}
                className="mb-4"
            />
            <Status texto="Status" valor={value} valorMudou={setValue} />

            {/* <form action="https://us-central1-servicos-f5c6c.cloudfunctions.net/enviarEmail" method="post">
                    <label>Assunto:</label>
                    <input type="text" name="assunto"/>

                    <label>Destinatários:</label>
                    <input type="text" name="destinatarios"/>

                    <label>Mensagem:</label>
                    <input type="text" name="corpo"/>

                    <button type="submit">Enviar</button>
                </form> */}
            <div className="flex justify-center mt-3">
                <Botao cor="blue" className="mr-2" onClick={() =>validarInputs(numeroServico, nomeCliente, descricao, emailCliente)}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </form>
    );
}
