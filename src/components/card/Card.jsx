import styles from './card.module.css'
import { Group } from '@/components/layout/Group'

function CardRoot({
    children, 
    layout = {default: 'row', sm: '', md:'', lg:''}, 
    className=""
}) {
    const baseClass = styles.card

    return (
        <Group className={`${baseClass} ${className}`} layout={layout}>
            {children}
        </Group>
    )
}

function CardHeader({
    children, 
    layout = {default: 'row', sm: '', md:'', lg:''}, 
    className=""
}) {

    const baseClass = styles.card__header

    return (
        <Group className={`${baseClass} ${className}`} layout={layout}>
            {children}
        </Group>
    )
}

function CardContent({
    children, 
    layout = {default: 'row', sm: '', md:'', lg:''}, 
    className=""
}) {

    const baseClass = styles.card__content

   return (
        <Group className={`${baseClass} ${className}`} layout={layout}>
            {children}
        </Group>
    )
}

const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Content: CardContent,
});

export { Card };