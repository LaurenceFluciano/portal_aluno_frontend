export function CardHeader({children, direction="row"}) {
    return (
        <div className={`card__header group--${direction}`}>
            {children}
        </div>
    )
}