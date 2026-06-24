import { Group } from "../../../../components/layout/Group";
import { Card } from "../../../../components/card/Card";
import CourseProgressBar from "./ProgressBar";

export function CourseCard({
    subject="Front-end",
    status="Em progresso",
    description="Aula 2 - Conceitos de desenvolvimento Front-end e Git + Github",
    progress=65
}) {

    return (
        <Card layout={{ default: 'row', md: 'col' }} className="mx--lg my--lg">
            <Group>
                <Card.Header layout={{ default: 'row' }}>
                    <span className="card__badge">{status}</span>
                    <h3 className="card__title mt--sm">
                        {subject}
                    </h3>
                </Card.Header>
                <Card.Content layout={{ default: 'row' }} className="card__content--course">
                    <p className="card__description my--md truncate">{description}</p>

                    <CourseProgressBar progress={progress} />
                </Card.Content>
            </Group>

            <Group className="align--middle-start md:align--middle-center mt--md">
                <button className="card__button">Retomar estudo</button>
            </Group>
        </Card>
    )
}