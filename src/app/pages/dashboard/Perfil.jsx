import { Group } from "@/components/layout/Group";
import { Menu } from "@/components/menu/Menu";
import useUser from "@/hook/useUser"

export default function Perfil() {
    const { user } = useUser()
    /* TO-DO
    * [ ] Criar panel componente
    * [ ] Criar componente para perfil
    * [ ] Criar estilos para o painel
    * [ x ] Criar um novo Menu component 
    */

    const firstName = user.nome.split(' ')[0];
    
    return (
        <div className="dashboard__container">

            <div className="perfil">
                <div className="perfil__avatar">
                    JS
                </div>
                <h1 className="perfil__name">{firstName}</h1>
                <span className="perfil__course">Engenharia de Software - 3 Ano</span>
            </div>

            <Menu.Nav variant={'line'}>
                <Menu.Item to={"/perfil/dados-pessoais"}>Dados Pessoais</Menu.Item>
                <Menu.Item to={"/perfil/configuracoes"}>Configuracoes</Menu.Item>
                <Menu.Item to={"/perfil/segurança"}>Seguranca</Menu.Item>
            </Menu.Nav>
            
            <div className="panel">
                <Group className="gap--24">
                    <span className="panel__label">Nome Completo</span>
                    <span className="panel__data">{user.nome}</span>
                </Group>
            </div>

        </div>
    )
}