import { useForm } from "../hooks/useForm"

interface EntradaProps {
    tipo?: 'email'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}   

export default function Email(props:  EntradaProps) {
    
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus: outline-none bg-gray-0 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
                />
        </div>
    )
}