import { Group } from "../Group";
import { Card } from "../Card/Card";
import { CardContent } from "../Card/CardContent";
import { CardHeader } from "../Card/CardHeader";
import CourseProgressBar from "../ProgressBar";


export function CourseCard({
    subject="Front-end",
    status="Em progresso",
    description="Aula 2 - Conceitos de desenvolvimento Front-end e Git + Github",
    progress=65
}) {

    return (
        <Card layout="col">
            <Group>
                <CardHeader layout="row">
                    <span className="card__badge">{status}</span>
                    <h3 className="card__title mt--4">
                        {subject}
                    </h3>
                </CardHeader>
                <CardContent layout="row">
                    <p className="card__description">{description}</p>

                    <CourseProgressBar progress={progress} />
                </CardContent>
            </Group>

            <Group className="align--middle-center">
                <button className="card__button">Retomar estudo</button>
            </Group>
        </Card>
    )
}