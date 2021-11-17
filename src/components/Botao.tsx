interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' | 'purple'
    className?: string
    children: any
    onClick?: () => void
    isLoading?: boolean
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor
    return (
        <button onClick={props.onClick} className={`
            bg-${cor}-600
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
            
        </button>
    )
}