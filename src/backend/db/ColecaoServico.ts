import {db, firebase} from "../config"
import Servico from "../../core/Servicos"
import ServicoRepositorio from "../../core/ServicoRepositorio"

export default class ColecaoServico implements ServicoRepositorio {

    #conversor = {
        toFirestore(formulario: Servico) {
            return {
                Numero_Servico: formulario.Numero_Servico,
                Nome_Cliente: formulario.Nome_Cliente,
                Descricao_Servico: formulario.Descricao_Servico,
                Email_Cliente: formulario.Email_Cliente,
                Status: formulario.Status
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Servico {
            const dados = snapshot?.data(options)
            return new Servico(dados.Numero_Servico, dados.Nome_Cliente, dados.Descricao_Servico, dados.Email_Cliente, dados.Status, snapshot?.id)
        }
    }

    async salvar(formulario: Servico): Promise<Servico> {
        if(formulario?.id) {
            await this.colecao().doc(formulario.id).set(formulario)
            return formulario
        } else {
            const docRef = await this.colecao().add(formulario)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(formulario: Servico): Promise<void> {
        return this.colecao().doc(formulario.id).delete()
    }

    async obterTodos(): Promise<Servico[]> {
        const query= await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase.firestore().collection('Servicos')
        .withConverter(this.#conversor)
    }
} 