import { Card } from "../../../../components/card/Card";

export function StatCard({
    label="Tempo de estudo",
    value="12h 45m",
    description="Esta semana"
}) {

    return (
        <Card>
            <span className="card__label">{label}</span>
            <h3 id="tempo" className="card__value">
                {value}
            </h3>
            <p className="card__description card__description--stat">{description}</p>
        </Card>
    )
}