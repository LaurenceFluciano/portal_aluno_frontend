import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import '../../styles/dashboard.css'

function Dashboard() {
    const [dataHoje, setDataHoje] = useState(new Date())


    useEffect(() => {
        const interval = setInterval(() => {
            setDataHoje(new Date())
        }, 60000)

        return () => clearInterval(interval)
    }, [])

    return (
    <>
        <header className="menu">
            <div className="menu__body">
                <h1 className="menu__title">Academia <span>Portal do aluno</span></h1>
                <nav className="menu__links">
                    <NavLink 
                        to='/dashboard'
                        className={({ isActive }) => 
                            `menu__item ${isActive ? "menu__item--active" : ""}`
                        }
                    >
                        Painel
                    </NavLink>

                    <NavLink
                        to='/disciplina'
                        className={({ isActive }) => 
                            `menu__item ${isActive ? "menu__item--active" : ""}`
                        }
                    >
                        Disciplinas
                    </NavLink>

                    <NavLink
                        to='/tutoria'
                        className={({ isActive }) => 
                            `menu__item ${isActive ? "menu__item--active" : ""}`
                        }
                    >
                        Tutor IA
                    </NavLink>

                    <NavLink
                        to='/perfil'
                        className={({ isActive }) => 
                            `menu__item ${isActive ? "menu__item--active" : ""}`
                        }
                    >
                        Perfil
                    </NavLink>

                </nav>
            </div>
        </header>
        <div className="dashboard">
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


                <div className="card">
                    <div className="card__body">
                        <span className="card__badge">Em progresso</span>
                        <h3 className="card__title">
                            Front-end
                        </h3>
                        <p className="card__description">Aula 2 - Conceitos de desenvolvimento Front-end e Git + Gtihub</p>
                        <div className="card__progress">
                            <div style={{width: "65%"}}>65%</div>
                        </div>
                    </div>
                
                    <button className="card__button">Retomar estudo</button>
                </div>

                <div className="card">
                    <div className="card__body">
                        <span className="card__badge">Em progresso</span>
                        <h3 className="card__title">
                            UX Design
                        </h3>
                        <p className="card__description">Aula 3 - Usabilidade</p>
                        <div className="card__progress">
                            <div style={{width: "34%"}}>34%</div>
                        </div>
                    </div>
                
                    <button className="card__button">Retomar estudo</button>
                </div>

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
        </div>
    </>
    )
}


export default Dashboard;