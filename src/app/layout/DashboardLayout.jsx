import { Outlet } from "react-router-dom";
import { Menu } from "@/components/menu/Menu";
import { BottomBar } from "../../components/ui/BottomBar";
import { BookOpen, LayoutDashboard, MessageSquare, User } from "lucide-react";
import { Group } from "../../components/layout/Group";

export default function DashboardLayout() {
    return (
     <>
        <header>
            <Menu>
                <Menu.Body>
                    <Menu.Title>
                        Academia <span>Portal do aluno</span>
                    </Menu.Title>

                    <Menu.Nav variant={'header'} className='ml--auto'>
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
        <footer>
            <BottomBar>
                <Menu.Item to={'/dashboard'}>
                    <Group layout={{default: 'row'}} className="align--middle-center">
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </Group>
                </Menu.Item>
                <Menu.Item to={'/disciplina'}>
                    <Group layout={{default: 'row'}} className="align--middle-center">
                        <BookOpen size={20} />
                        <span>Disciplinas</span>
                    </Group>
                </Menu.Item>
                <Menu.Item to={'/tutoria'}>
                    <Group layout={{default: 'row'}} className="align--middle-center">
                        <MessageSquare size={20} />
                        <span>Tutoria</span>
                    </Group>
                </Menu.Item>
                <Menu.Item to={'/perfil/dados-pessoais'}>
                    <Group layout={{default: 'row'}} className="align--middle-center">
                        <User size={20} />
                        <span>Perfil</span>
                    </Group>
                </Menu.Item>
            </BottomBar>
        </footer>
     </>   
    )
}