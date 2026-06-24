import { Group } from "@/components/layout/Group";
import { Menu } from "@/components/menu/Menu";
import useUser from "@/hook/useUser";
import './styles/perfil.css' ;

export default function Perfil() {
    const { user } = useUser()

    const firstName = user?.nome ? user.nome.split(' ')[0] : 'Aluno';
    const iniciais = user?.nome 
        ? (user.nome.split(' ')[0][0] + (user.nome.split(' ')[1]?.[0] || '')).toUpperCase() 
        : '??';
    
    return (
        <div className="dashboard__container">

            <div className="perfil">
                <div className="perfil__avatar">
                    {iniciais}
                </div>
                <h1 className="perfil__name">{firstName}</h1>
                <span className="perfil__course">Engenharia de Software - 3 Ano</span>
            </div>

            <Menu.Nav variant={'lined'}>
                <Menu.Item to={"/perfil/dados-pessoais"}>Dados Pessoais</Menu.Item>
                <Menu.Item to={"/perfil/configuracoes"}>Configuracoes</Menu.Item>
                <Menu.Item to={"/perfil/seguranca"}>Seguranca</Menu.Item>
            </Menu.Nav>
            
            <div className="panel">
                <Group className="gap--24">
                    <span className="panel__label">Nome Completo</span>
                    <span className="panel__data">{user?.nome ?? 'Não fornecido'}</span>
                </Group>
                <Group className="gap--24">
                    <span className="panel__label">Nome de Prefrência</span>
                    <span className="panel__data">{firstName ?? 'Não fornecido'}</span>
                </Group>
                <Group className="gap--24">
                    <span className="panel__label">Endereço de E-mail</span>
                    <span className="panel__data">{user?.email ?? 'Não fornecido'}</span>
                </Group>
                <Group className="gap--24">
                    <span className="panel__label">Matricula / CPF</span>
                    <span className="panel__data">{user?.cpf ?? 'Não fornecido'}</span>
                </Group>
                <Group className="gap--24">
                    <span className="panel__label">Telefone</span>
                    <span className="panel__data">{user?.telefone ?? 'Não fornecido'}</span>
                </Group>
            </div>

        </div>
    )
}