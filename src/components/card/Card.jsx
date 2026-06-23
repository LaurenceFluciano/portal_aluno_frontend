import styles from './card.module.css'

function CardRoot({children, direction = 'row'}) {
    const baseClass = styles.card

    return (
        <div className={`${baseClass} group group--${direction}`}>
            {children}
        </div>
    )
}

function CardHeader({children, direction="row"}) {

    const baseClass = styles.card__header

    return (
        <div className={`${baseClass} group group--${direction}`}>
            {children}
        </div>
    )
}

function CardContent({children, direction = "row"}) {

    const baseClass = styles.card__content

    return (
        <div className={`${baseClass} group group--${direction}`}>
            {children}
        </div>
    )
}

const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Content: CardContent,
});

export { Card };