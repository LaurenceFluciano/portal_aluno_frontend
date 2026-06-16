import '../../styles/card.css'

export function Card({children, layout = 'row'}) {
    return (
        <div className={`card layout--${layout}`}>
            {children}
        </div>
    )
}