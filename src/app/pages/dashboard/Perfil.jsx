import { Group } from "../../../components/Group";
import MenuItem from "../../../components/Menu/MenuItem";
import MenuLink from "../../../components/Menu/MenuLink";



export default function Perfil() {
    /* TO-DO
    * [ ] Criar panel componente
    * [ ] Criar componente para perfil
    * [ ] Criar estilos para o painel
    * [ x ] Criar um novo Menu component 
    */
    
    return (
        <div className="dashboard__container">

            <div className="perfil">
                <h1 className="perfil__name">Joao Silva</h1>
                <span className="perfil__course">Engenharia de Software - 3 Ano</span>
            </div>

            <MenuLink variant={'line'}>
                <MenuItem to={"/perfil/dados-pessoais"}>Dados Pessoais</MenuItem>
                <MenuItem to={"/perfil/configuracoes"}>Configuracoes</MenuItem>
                <MenuItem to={"/perfil/segurança"}>Seguranca</MenuItem>
            </MenuLink>
            
            <div className="panel">
                <Group className="gap--24">
                    <span className="panel__label">Nome Completo</span>
                    <span className="panel__data">Joao Silva</span>
                </Group>
            </div>

        </div>
    )
}