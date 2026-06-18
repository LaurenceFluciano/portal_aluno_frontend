import { Group } from "../layout/Group";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardHeader } from "./CardHeader";
import CourseProgressBar from "../ProgressBar";


export function DisciplineCard({
    subject="Front-end",
    status="EM CURSO",
    professor="PROF. MARCO SILVA",
    progress=65
}) {

    return (
        <Card direction="row">
            <CardHeader direction="col">
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