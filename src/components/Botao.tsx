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
            bg-${cor}-700
            ${props.className}
        `}>
            {props.children}
            
        </button>
    )
}