import { Card } from "@/components/card/Card";
import { Group } from "@/components/layout/Group"

export function StatCard({
    label="Tempo de estudo",
    value="12h 45m",
    description="Esta semana",
    icon: Icon
}) {

    return (
        <Card layout={{default: 'row'}} className="mx--lg">
            <Group layout={{default: 'col'}}>
                {Icon && <Icon size={24} className="card__icon mr--sm" />}
                <span className="card__label m--none my--auto">{label}</span>
            </Group>
            <h3 id="tempo" className="card__value my--md">
                {value}
            </h3>
            <p className="card__description card__description--stat m--none">{description}</p>
        </Card>
    )
}