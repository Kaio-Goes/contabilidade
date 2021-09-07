import {db, firebase} from "../config"
import Servico from "../../core/Servicos"
import ProcessoRepositorio from "../../core/ProcessoRepositorio"

export default class ColecaoProcesso implements ProcessoRepositorio {

    #conversor = {
        toFirestore(formulario: Servico) {
            return {
                Numero_Servico: formulario.Numero_Servico,
                Nome_Cliente: formulario.Nome_Cliente,
                Descricao_Servico: formulario.Descricao_Servico,
                Status: formulario.Status
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Servico {
            const dados = snapshot?.data(options)
            return new Servico(dados.Numero_Servico, dados.Nome_Cliente, dados.Descricao_Servico,dados.Status, snapshot?.id)
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

    // async searchNumProcesso(formulario: Number) {
    //     // const query = db.collection("servicos").where("numProcesso", "==", formulario)
        
    //     const query = await db.collection("servicos").where( 'numProcesso', "!=", formulario).get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.id, '=>', doc.data())
    //         })
    //     })
    //     return (
    //         console.log(formulario)
    //     )
    //     } 
    

    private colecao() {
        return firebase.firestore().collection('Servicos')
        .withConverter(this.#conversor)
    }
} 