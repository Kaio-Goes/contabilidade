export default class Servico {
    #id: string
    #Numero_Servico: number
    #Nome_Cliente: string
    #Descricao_Servico: string
    #Status: string

    constructor(Numero_servico: number, Nome_Cliente: string, Descricao_Servico: string, Status: string, id: string = null) {
        this.#Numero_Servico = Numero_servico
        this.#Nome_Cliente = Nome_Cliente
        this.#Descricao_Servico = Descricao_Servico
        this.#Status = Status
        this.#id = id

    }

    static vazio() {
        return new Servico(0, '', '', 'DEFAULT')
    }

    get id() {
        return this.#id
    }

    get Numero_Servico() {
        return this.#Numero_Servico
    }

    get Nome_Cliente() {
        return this.#Nome_Cliente
    }

    get Descricao_Servico() {
        return this.#Descricao_Servico
    }

    get Status() {
        return this.#Status
    }
}
