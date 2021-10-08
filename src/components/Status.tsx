interface statusServicos {
    texto: string
    valor: any
    valorMudou?: (valor: any) => void
}

export default function Constructor(props: statusServicos) {
    return (
        <div className="flex flex-col">
            <label className="mb-4">
                {props.texto}
            </label>
            <select className={`
                    border border-purple-500 rounded-lg
                    focus: outline-none bg-gray-0 px-4 py-2
                `}
                onChange={e => props.valorMudou?.(e.target.value)}
                defaultValue= {!props.valorMudou ? 'DEFAULT' : props.valor}
                // defaultValue= {!"DEFAULT" ? '' : props.valor}
                required
            >
                <option value="" disabled>Escolha uma das opções ...</option>
                <option value="Pendente" >Pendente</option>
                <option value="Concluido" >Concluido</option>
                <option value="Cancelado" >Cancelado</option>
            </select>
        </div>
    )
}