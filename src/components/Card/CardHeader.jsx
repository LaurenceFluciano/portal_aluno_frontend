export function CardHeader({children, layout="row"}) {
    return (
        <div className={`card__header layout--${layout}`}>
            {children}
        </div>
    )
}