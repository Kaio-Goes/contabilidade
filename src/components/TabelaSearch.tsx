import Servico from "../core/Servicos";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaSearchProps {
    formulario?: Servico
    formularioSelecionado?: (cliente: Servico) => void
}

export default function TabelaSearch(props: TabelaSearchProps) {
    
    return (
        <div>
            <h1>Numero do Servico: {props.formulario}</h1>
        </div>
    )
}