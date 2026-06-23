import { Outlet } from "react-router-dom";
import { Menu } from "@/components/menu/Menu";

export default function DashboardLayout() {
    return (
     <>
        <header>
            <Menu>
                <Menu.Body>
                    <Menu.Title>
                        Academia <span>Portal do aluno</span>
                    </Menu.Title>

                    <Menu.Nav variant={'header'}>
                        <Menu.Item to={'/dashboard'}>Painel</Menu.Item>
                        <Menu.Item to={'/disciplina'}>Disciplinas</Menu.Item>
                        <Menu.Item to={'/tutoria'}>Tutor IA</Menu.Item>
                        <Menu.Item to={'/perfil/dados-pessoais'}>Perfil</Menu.Item>
                    </Menu.Nav>
                </Menu.Body>
            </Menu>
        </header>
        <div className="dashboard">
            <Outlet />
        </div>
     </>   
    )
}