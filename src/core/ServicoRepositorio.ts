import Servico from "./Servicos";

export default interface ServicoRepositorio {
    salvar(formulario: Servico): Promise<Servico>
    excluir(formulario: Servico): Promise<void>
    obterTodos(): Promise<Servico[]>

}