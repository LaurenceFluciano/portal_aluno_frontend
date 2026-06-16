import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import MenuItem from "../../components/MenuItem";

import '../../styles/dashboard.css'

export default function DashboardLayout() {
    return (
     <>
        <header>
            <Menu>
                <MenuItem to={'/dashboard'}>Painel</MenuItem>
                <MenuItem to={'/disciplina'}>Disciplinas</MenuItem>
                <MenuItem to={'/tutoria'}>Tutor IA</MenuItem>
                <MenuItem to={'/perfil'}>Perfil</MenuItem>
            </Menu>
        </header>
        <div className="dashboard">
            <Outlet />
        </div>
     </>   
    )
}