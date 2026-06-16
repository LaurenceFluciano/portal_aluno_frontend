import '../styles/card.css'

export function Card({children, layout = 'row'}) {
    return (
        <div className={`card card-${layout}`}>
            {children}
        </div>
    )
}