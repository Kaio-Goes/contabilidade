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
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="text-left p-4">Numero do Processo</th>
                <th className="text-left p-4">Observação</th>
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
                    <td className="text-left p-4">{formulario.id}</td>
                    <td className="text-left p-4">{formulario.nome}</td>
                    <td className="text-left p-4">{formulario.idade}</td>
                    <td className="text-left p-4">{formulario.numProcesso}</td>
                    <td className="text-left p-4">{formulario.observacao}</td>
                    <td className="text-left p-4">{formulario.status}</td>
                    {exibirAcoes ? renderizarAcoes(formulario) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Servico) {
        return (
            <td className="flex justify-center">
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
                    <button onClick={() => props.formularioExcluido?.(cliente)} className={`
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