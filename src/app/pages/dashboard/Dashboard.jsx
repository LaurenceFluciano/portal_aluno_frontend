import { useEffect, useState } from "react";
import { CourseCard } from "../../../components/Card/CourseCard";

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
                <p>
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

            <CourseCard />

            <CourseCard g
                status="Em progresso"
                subject="UX Design"
                description="Aula 3 - Usabilidade"
                progress={34}
            />

            <div className="card__group">
                <div className="card">
                    <div className="card__body">
                        <span className="card__badge">Tempo de estudo</span>
                        <h3 id="tempo" className="card__title">
                            12h 45m
                        </h3>
                        <p className="card__description">Esta semana</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card__body">
                        <span className="card__badge">Tarefas pendentes</span>
                        <h3 id="tarefas" className="card__title">
                            2
                        </h3>
                        <p id="vencimento" className="card__description">Próximo vencimento em 2 dias</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card__body">
                        <span className="card__badge">Discussão com a IA</span>
                        <h3 id="chats" className="card__title">
                            8
                        </h3>
                        <p className="card__description">Tópicos ativos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard;