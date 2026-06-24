import { useEffect, useState } from "react";
import { CourseCard } from "./components/CourseCard";
import { StatCard } from "./components/StatCard";
import Grid from "@/components/layout/Grid";

import useUser from "@/hook/useUser"

import './styles/card.css'
import './styles/welcome.css'
import { BotIcon, FileIcon, Timer } from "lucide-react";

function Dashboard() {
    const { user } = useUser()
    const dataHoje = new Date()

    const [cursos, setCursos] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch("../../../mock/courses.json");

                if (!response.ok) {
                    throw new Error("Dados não encontrados.")
                }

                const data = await response.json();
                setCursos(data.response);
            } catch (err)  {
                setError(err);
            }
        }

        loadData();
    }, []);

    const firstName = user.nome.split(' ')[0];

    return (
        <div className="dashboard__container">

            <div className="welcome">
                <h2>
                    Boa noite, {firstName}
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
         

            <Grid 
                cols={{
                    default: 1,
                    sm: 2,
                    md: 3
                }}
                
                gap={{
                    default: 'md',
                    md: 'lg'
                }}
            >
                <StatCard 
                    label="Tempo de estudo"
                    value="12h 45m"
                    description="Esta semana"
                    icon={Timer}
                />

                <StatCard 
                    label="Tarefas pendentes"
                    value="2"
                    description="Próximo vencimento em 2 dias"
                    icon={FileIcon}
                />

                <StatCard 
                    label="Discussão com a IA"
                    value="8"
                    description="Tópicos ativos"
                    icon={BotIcon}
                />
            </Grid>
        </div>
    )
}


export default Dashboard;