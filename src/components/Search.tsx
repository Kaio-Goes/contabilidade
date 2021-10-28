interface SearchProps {
    tipo?: number
    texto: string
    valor: any
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props:  SearchProps) {

    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.texto}
            </label>
            <input 
                type="number"
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required
                className={`
                    border border-purple-500 rounded-lg
                    focus: outline-none bg-gray-0 px-4 py-2
                    }
                `}
                />
                
        </div>
    )
}