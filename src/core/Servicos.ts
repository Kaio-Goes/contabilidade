export default class Servico {
    #id: string
    #Numero_Servico: string
    #Nome_Cliente: string
    #Descricao_Servico: string
    #Email_Cliente: string
    #Status: string

    constructor(Numero_servico: string, Nome_Cliente: string, Descricao_Servico: string, Email_Cliente: string, Status: string, id: string = null) {
        this.#Numero_Servico = Numero_servico
        this.#Nome_Cliente = Nome_Cliente
        this.#Descricao_Servico = Descricao_Servico
        this.#Email_Cliente = Email_Cliente
        this.#Status = Status
        this.#id = id

    }

    static vazio() {
        return new Servico('', '', '','', 'DEFAULT')
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

    get Email_Cliente() {
        return this.#Email_Cliente
    }

    get Status() {
        return this.#Status
    }
}
