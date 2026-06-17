import { useEffect, useState } from "react";
import { CourseCard } from "../../../components/CourseCard/CourseCard";
import { StatCard } from "../../../components/StatCard/StatCard";

function Dashboard() {
    const dataHoje = new Date()

    const [cursos, setCursos] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch("../../../mock/courses.json");

                if (!response.ok) {
                    setError(true);
                    return;
                }

                const data = await response.json();
                setCursos(data.response);
            } catch (error) {
                setError(true);
            }
        }

        loadData();
    }, []);

    return (
        <div className="dashboard__container">

            <div className="welcome">
                <h2>
                    Boa noite, João
                </h2>
                <p className="ml--4 mb--4">
                    {String(dataHoje.getDate()).padStart(2,'0')}/
                    {String(dataHoje.getMonth()).padStart(2,'0')}/
                    {dataHoje.getFullYear()}
                </p>
                <p>
                    Bem-vindo de volta a sua sessão de estudos focado.
                    Você tem 2 tarefas para essa semana
                    e esta atualmente adiantado em seu cronograma de leitura.
                </p>
            </div>

            { error && <div>Erro ao carregar os dados </div>}
            { cursos.length > 0 && cursos.map((value, index) => (
                <CourseCard 
                    key={index}

                    subject={value.subject}
                    status={value.status}
                    description={value.description}
                    progress={value.progress}
                />
            ))}
         

            <div className="grid sd:col--2 md:col--3 gap--16">
                <StatCard 
                    label="Tempo de estudo"
                    value="12h 45m"
                    description="Esta semana"
                />

                <StatCard 
                    label="Tarefas pendentes"
                    value="2"
                    description="Próximo vencimento em 2 dias"
                />

                <StatCard 
                    label="Discussão com a IA"
                    value="8"
                    description="Tópicos ativos"
                />
            </div>
        </div>
    )
}


export default Dashboard;