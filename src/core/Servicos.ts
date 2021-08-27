export default class Servico {
    #id: string
    #nome: string
    #idade: number
    #numProcesso: number
    #observacao: string
    #status: string

    constructor(nome: string, idade: number, numProcesso: number, observacao: string, status: string, id: string = null) {
        this.#nome = nome
        this.#idade = idade
        this.#numProcesso = numProcesso
        this.#observacao = observacao
        this.#status = status
        this.#id = id

    }

    static vazio() {
        return new Servico('', 0, 0, '', 'DEFAULT')
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    get numProcesso() {
        return this.#numProcesso
    }

    get observacao() {
        return this.#observacao
    }

    get status() {
        return this.#status
    }
}
