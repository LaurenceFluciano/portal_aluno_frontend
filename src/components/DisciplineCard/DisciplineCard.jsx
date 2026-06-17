import { Group } from "../Group";
import { Card } from "../Card/Card";
import { CardContent } from "../Card/CardContent";
import { CardHeader } from "../Card/CardHeader";
import CourseProgressBar from "../ProgressBar";


export function DisciplineCard({
    subject="Front-end",
    status="EM CURSO",
    professor="PROF. MARCO SILVA",
    progress=65
}) {

    return (
        <Card layout="row">
            <CardHeader layout="col">
                <Group>
                    <h3 className="card__title">{subject}</h3>
                    <span className="card__description">{professor}</span>
                </Group>
                <Group className="ml--auto">
                    <span className="card__badge">{status}</span>
                </Group>
            </CardHeader>
            <CardContent>
                <CourseProgressBar progress={progress} />
                <button className="card__button">Acessar Disciplina</button>
            </CardContent>
        </Card>
    )
}