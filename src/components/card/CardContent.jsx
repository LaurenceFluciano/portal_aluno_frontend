export function CardContent({children, direction = "row"}) {
    return (
        <div className={`card__content  group--${direction}`}>
            {children}
        </div>
    )
}