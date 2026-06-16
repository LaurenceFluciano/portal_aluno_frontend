import { Group } from "../Group";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardHeader } from "./CardHeader";


export function CourseCard({
    subject="Front-end",
    status="Em progresso",
    description="Aula 2 - Conceitos de desenvolvimento Front-end e Git + Github",
    progress=65
}) {
    return (
        <Card>
            <CardHeader>
                <span className="card__badge">{status}</span>
                <h3 className="card__title">
                    {subject}
                </h3>
            </CardHeader>
            <CardContent layout='col'>
                <Group>
                    <p className="card__description">{description}</p>
                    <div className="card__progress">
                        <div style={{width: `${progress}%`}}>{progress}%</div>
                    </div>
                </Group>
                

                <button className="card__button">Retomar estudo</button>
            </CardContent>
        </Card>
    )
}