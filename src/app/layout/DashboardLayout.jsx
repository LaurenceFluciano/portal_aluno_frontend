import { Outlet } from "react-router-dom";
import MenuItem from "../../components/Menu/MenuItem";

import '../../styles/dashboard.css'
import MenuHeader from "../../components/Menu/MenuHeader";

export default function DashboardLayout() {
    return (
     <>
        <header>
            <MenuHeader>
                <MenuItem to={'/dashboard'}>Painel</MenuItem>
                <MenuItem to={'/disciplina'}>Disciplinas</MenuItem>
                <MenuItem to={'/tutoria'}>Tutor IA</MenuItem>
                <MenuItem to={'/perfil/dados-pessoais'}>Perfil</MenuItem>
            </MenuHeader>
        </header>
        <div className="dashboard">
            <Outlet />
        </div>
     </>   
    )
}