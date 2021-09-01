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
    const [nome, setNome] = useState(props.formulario?.nome ?? '')
    const [idade, setIdade] = useState(props.formulario?.idade ?? 0)
    const [numProcesso, setnumProcesso] = useState(props.formulario?.numProcesso ?? 0)
    const [observacao, setObservacao] = useState(props.formulario?.observacao ?? '')
    //const [status, setStatus] = useState(props.cliente?.status ?? '')
    const [value, setValue] = useState(props.formulario?.status)

    console.log(props.formularioMudou)
    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} className="mb-4" />
            ) : false}

            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-4" />
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} className="mb-4" />
            <Entrada texto="Numero do Processo" tipo="number" valor={numProcesso} valorMudou={setnumProcesso} className="mb-4" />
            <Entrada texto="Observação" valor={observacao} valorMudou={setObservacao} className="mb-4" />
            {/* <Entrada texto="Status" valor={status} valorMudou={setStatus} /> */}
            <Status texto="Status" valor={value} valorMudou={setValue} />

            
            <div className="flex justify-center mt-3">
                <Botao cor="blue" className="mr-2" 
                    onClick={() => props.formularioMudou?.
                        (new Servico(nome, +idade, +numProcesso,observacao,value, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}