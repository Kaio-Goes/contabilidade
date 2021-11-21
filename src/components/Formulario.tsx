import { useContext, useState } from "react";
import Servico from "../core/Servicos";
import Botao from "./Botao";
import Entrada from "./Entrada";
import Status from "./Status"

interface FormularioProps {
    formulario: Servico
    formularioMudou?: (cliente: Servico) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.formulario?.id
    const [numeroServico, setNumeroServico] = useState(props.formulario?.Numero_Servico ?? '')
    const [nomeCliente, setNomeCliente] = useState(props.formulario?.Nome_Cliente ?? '')
    const [descricao, setDescricao] = useState(props.formulario?.Descricao_Servico ?? '')
    const [emailCliente, setemailCliente] = useState(props.formulario?.Email_Cliente ?? '')
    const [value, setValue] = useState(props.formulario?.Status)

    console.log(props.formularioMudou)
    return (
        <div>
            <Entrada texto="Número do Serviço" tipo="number" valor={numeroServico} valorMudou={setNumeroServico} className="mb-4" />
            <Entrada texto="Nome do Cliente" valor={nomeCliente} valorMudou={setNomeCliente} className="mb-4" />
            <Entrada texto="Descrição do Serviço" valor={descricao} valorMudou={setDescricao} className="mb-4" />
            <Entrada tipo="email" texto="E-mail do Cliente (exemplo@exemplo.com)" valor={emailCliente} valorMudou={setemailCliente} className="mb-4" ></Entrada>
            <Status texto="Status" valor={value} valorMudou={setValue} />

            <div className="flex justify-center mt-3">
                <Botao cor="blue" className="mr-2" 
                    onClick={() => {
                        if (
                            numeroServico.length === 0 ||
                            nomeCliente.length === 0 ||
                            descricao.length === 0
                            || emailCliente.length === 0 
                            ) {
                                return window.alert('Preencha todos os campos')
                            }
                        else if ( 
                            emailCliente.indexOf('@') === -1)
                            {
                                return window.alert('E-mail inválido. Falta "@" no corpo do e-mail.')
                            }
                        else if (
                            emailCliente.indexOf('.') === -1)
                            {
                                return window.alert('E-mail inválido. Falta "." no corpo do e-mail.')
                            } 
                        props.formularioMudou?.
                        (new Servico(numeroServico, nomeCliente, descricao,emailCliente,value, id))}}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}