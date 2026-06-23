import { Group } from "../layout/Group";
import { Card } from "../card/Card";
import CourseProgressBar from "./ProgressBar";


export function DisciplineCard({
    subject="Front-end",
    status="EM CURSO",
    professor="PROF. MARCO SILVA",
    progress=65
}) {

    return (
        <Card direction="row">
            <Card.Header direction="col">
                <Group>
                    <h3 className="card__title">{subject}</h3>
                    <span className="card__description">{professor}</span>
                </Group>
                <Group className="ml--auto">
                    <span className="card__badge">{status}</span>
                </Group>
            </Card.Header>
            <Card.Content>
                <CourseProgressBar progress={progress} />
                <button className="card__button">Acessar Disciplina</button>
            </Card.Content>
        </Card>
    )
}