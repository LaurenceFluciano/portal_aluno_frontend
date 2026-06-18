import { Group } from "../layout/Group";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardHeader } from "./CardHeader";
import CourseProgressBar from "../ProgressBar";


export function CourseCard({
    subject="Front-end",
    status="Em progresso",
    description="Aula 2 - Conceitos de desenvolvimento Front-end e Git + Github",
    progress=65
}) {

    return (
        <Card direction="col">
            <Group>
                <CardHeader direction="row">
                    <span className="card__badge">{status}</span>
                    <h3 className="card__title mt--4">
                        {subject}
                    </h3>
                </CardHeader>
                <CardContent direction="row">
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