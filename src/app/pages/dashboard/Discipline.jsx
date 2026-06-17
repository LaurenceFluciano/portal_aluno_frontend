import { useEffect, useState } from "react";
import { DisciplineCard } from "../../../components/DisciplineCard/DisciplineCard";

export default function Discipline() {
    const [disciplinas, setDisciplinas] = useState([])
    const [erro, setErro] = useState(false)


    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch("../../../mock/discipline.json");

                if (!response.ok) {
                    setError(true);
                    return;
                }

                const data = await response.json();
                setDisciplinas(data.response);
            } catch (error) {
                setError(true);
            }
        }

        loadData();
    })

    return (
        <div className="dashboard__container">
            <h2>Minhas Disciplinas</h2>
            <div className="grid sd:col--2 md:col--3 gap--16">
                {erro && <div>Ocorreu um erro ao buscar os dados</div>}
                {disciplinas.length > 0 && disciplinas.map((value, index) => (
                    <DisciplineCard 
                        key={index}
                        subject={value.subject}
                        status={value.status}
                        professor={value.professor}
                        progress={value.progress}
                    />
                ))}
            </div>
        </div>
    )
}