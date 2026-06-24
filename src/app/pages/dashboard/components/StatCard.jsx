import { Card } from "@/components/card/Card";

export function StatCard({
    label="Tempo de estudo",
    value="12h 45m",
    description="Esta semana"
}) {

    return (
        <Card layout={{default: 'row'}} className="mx--lg">
            <span className="card__label m--none">{label}</span>
            <h3 id="tempo" className="card__value my--md">
                {value}
            </h3>
            <p className="card__description card__description--stat m--none">{description}</p>
        </Card>
    )
}