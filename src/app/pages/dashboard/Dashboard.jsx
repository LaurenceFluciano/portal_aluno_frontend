import { useEffect, useState } from "react";
import { CourseCard } from "../../../components/CourseCard/CourseCard";
import { StatCard } from "../../../components/StatCard/StatCard";

function Dashboard() {
    const [dataHoje, setDataHoje] = useState(new Date())


    useEffect(() => {
        const interval = setInterval(() => {
            setDataHoje(new Date())
        }, 60000)

        return () => clearInterval(interval)
    }, [])

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

            <CourseCard
                subject="Front-end"
                status="Em progresso"
                description="Aula 2 - Conceitos de desenvolvimento Front-end e Git + Github"
                progress={65}
            />

            <CourseCard
                status="Em progresso"
                subject="UX Design"
                description="Aula 3 - Usabilidade"
                progress={34}
            />

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