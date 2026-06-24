import { useEffect, useState } from "react";
import { DisciplineCard } from "./components/DisciplineCard";

import './styles/card.css'

import Grid from "@/components/layout/Grid"

export default function Discipline() {
    const [disciplinas, setDisciplinas] = useState([])
    const [erro, setErro] = useState(null)


    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch("../../../mock/discipline.json");

                if (!response.ok) {
                    throw new Error("Dados não encontrados.")
                }

                const data = await response.json();
                setDisciplinas(data.response);
            } catch (error) {
                setErro(error);
            }
        }

        loadData();
    }, [])

    return (
        <div className="dashboard__container">
            <h2 className="ml--md">Minhas Disciplinas</h2>
            <Grid
                cols={{
                    default: 1,
                    md: 2,
                }}
                gap={{
                    default: 'md'
                }}
            >
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
            </Grid>
        </div>
    )
}