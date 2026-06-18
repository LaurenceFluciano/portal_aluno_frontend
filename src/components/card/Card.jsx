import '../../styles/card.css'

export function Card({children, direction = 'row'}) {
    return (
        <div className={`card group--${direction}`}>
            {children}
        </div>
    )
}