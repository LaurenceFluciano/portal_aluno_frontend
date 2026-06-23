import { Group } from "../layout/Group";
import { Card } from "../card/Card";
import CourseProgressBar from "./ProgressBar";

export function CourseCard({
    subject="Front-end",
    status="Em progresso",
    description="Aula 2 - Conceitos de desenvolvimento Front-end e Git + Github",
    progress=65
}) {

    return (
        <Card direction="col">
            <Group>
                <Card.Header direction="row">
                    <span className="card__badge">{status}</span>
                    <h3 className="card__title mt--4">
                        {subject}
                    </h3>
                </Card.Header>
                <Card.Content direction="row">
                    <p className="card__description">{description}</p>

                    <CourseProgressBar progress={progress} />
                </Card.Content>
            </Group>

            <Group className="align--middle-center">
                <button className="card__button">Retomar estudo</button>
            </Group>
        </Card>
    )
}