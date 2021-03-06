import { useEffect, useState } from "react"
import ColecaoServico from "../backend/db/ColecaoServico"
import Servico from "../core/Servicos"
import ServicoRepositorio from "../core/ServicoRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useServico() {
    const repo: ServicoRepositorio = new ColecaoServico

    const { tabelaVisivel, exibirFormulario, exibirTabela, formularioVisivel} = useTabelaOuForm()

    const [formulario, setFormulario] = useState<Servico>(Servico.vazio())
    const [formularios, setFormularios] = useState<Servico[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(formularios => {
            setFormularios(formularios)
            exibirTabela()
        })
    }

    function selecionarFormulario(formulario: Servico) {
        setFormulario(formulario)
        exibirFormulario()
    }

    async function excluirFormulario(formulario: Servico) {
        await repo.excluir(formulario)
        obterTodos()
    }

    function novoFormulario() {
        setFormulario(Servico.vazio())
        exibirFormulario()
    }

    async function salvarFormulario(formulario: Servico) {
        await repo.salvar(formulario)
        obterTodos()
    }

    return {
        formulario,
        formularios,
        novoFormulario,
        salvarFormulario,
        excluirFormulario,
        selecionarFormulario,
        obterTodos ,
        tabelaVisivel, 
        exibirTabela
    }

}