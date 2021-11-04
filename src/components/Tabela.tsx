import Servico from "../core/Servicos";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
    formulario: Servico[]
    formularioSelecionado?: (cliente: Servico) => void
    formularioExcluido?: (cliente: Servico) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.formularioExcluido || props.formularioSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Número</th>
                <th className="text-left p-4">Cliente</th>
                <th className="text-left p-4">Descrição</th>
                <th className="text-left p-4">Status</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}

            </tr>
        )
    }

    function renderizarDados() {
        return props.formulario?.map((formulario, i) => {
            return (
                <tr key={formulario.id}
                    className={`
                    ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
                `}>
                    <td className="text-left p-4">{formulario.Numero_Servico}</td>
                    <td className="text-left p-4">{formulario.Nome_Cliente}</td>
                    <td className="text-left p-4">{formulario.Descricao_Servico}</td>
                    <td className="text-left p-4">{formulario.Status}</td>
                    {exibirAcoes ? renderizarAcoes(formulario) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Servico) {    
        function confirmExclusao() {
            if(confirm("Tem certeza que deseja excluir esse serviço?")){
                props.formularioExcluido?.(cliente)
            }
        }
        return (
            <td className="flex justify-center">
                <button >sss</button>
                {props.formularioSelecionado ? (
                    <button onClick={() => props.formularioSelecionado?.(cliente)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50 outline-none
                `}>
                        {IconeEdicao}
                    </button>
                ) : false}

                {props.formularioExcluido ? (
                    <button onClick={() => confirmExclusao()} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50 outline-none
                `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from bg-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}