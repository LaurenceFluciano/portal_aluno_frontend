export function CardContent({children, layout = "row"}) {
    return (
        <div className={`card__content  layout--${layout}`}>
            {children}
        </div>
    )
}