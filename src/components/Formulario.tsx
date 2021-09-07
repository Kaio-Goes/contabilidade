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

    //const {user} = useContext(AuthContext)

    const id = props.formulario?.id
    const [numeroServico, setNumeroServico] = useState(props.formulario?.Numero_Servico ?? 0)
    const [nomeCliente, setNomeCliente] = useState(props.formulario?.Nome_Cliente ?? '')
    const [descricao, setDescricao] = useState(props.formulario?.Descricao_Servico ?? '')
    //const [status, setStatus] = useState(props.cliente?.status ?? '')
    const [value, setValue] = useState(props.formulario?.status)

    console.log(props.formularioMudou)
    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} className="mb-4" />
            ) : false}

            <Entrada texto="Numero do Serviço" tipo="number" valor={numeroServico} valorMudou={setNumeroServico} className="mb-4" />
            <Entrada texto="Nome do Cliente" valor={nomeCliente} valorMudou={setNomeCliente} className="mb-4" />
            <Entrada texto="Descrição do Serviço" valor={descricao} valorMudou={setDescricao} className="mb-4" />
            {/* <Entrada texto="Status" valor={status} valorMudou={setStatus} /> */}
            <Status texto="Status" valor={value} valorMudou={setValue} />

            
            <div className="flex justify-center mt-3">
                <Botao cor="blue" className="mr-2" 
                    onClick={() => props.formularioMudou?.
                        (new Servico(+numeroServico, nomeCliente, descricao,value, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}