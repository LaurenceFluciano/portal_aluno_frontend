import { Group } from "@/components/layout/Group";
import { Card } from "@/components/card/Card";
import CourseProgressBar from "./ProgressBar";


export function DisciplineCard({
    subject="Front-end",
    status="EM CURSO",
    professor="PROF. MARCO SILVA",
    progress=65
}) {

    return (
        <Card layout={{default:'row'}} className="mx--lg my--lg card--discipline">
            <Card.Header layout={{default:'row', md: 'col'}}>
                <Group layout={{default:'row'}}>
                    <h3 className="card__title">{subject}</h3>
                    <span className="card__description">{professor}</span>
                </Group>
                <Group layout={{default:'row'}} className="md:ml--auto mb--sm">
                    <span className="card__badge">{status}</span>
                </Group>
            </Card.Header>
            <Card.Content layout={{default:'row'}}>
                <CourseProgressBar progress={progress}  />
                <button className="card__button mt--sm">Acessar Disciplina</button>
            </Card.Content>
        </Card>
    )
}