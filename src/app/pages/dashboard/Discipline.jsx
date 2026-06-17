import { DisciplineCard } from "../../../components/DisciplineCard/DisciplineCard";

export default function Discipline() {
    return (
        <div className="dashboard__container">
            <h2>Minhas Disciplinas</h2>
            <div className="grid sd:col--2 md:col--3 gap--16">
                <DisciplineCard />
            </div>
        </div>
    )
}