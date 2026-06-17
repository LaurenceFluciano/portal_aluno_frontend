import MenuLink from "./MenuLink";


export default function MenuHeader({ children }) {
    return (
        <div className="menu">
            <div className="menu__body">
                <h1 className="menu__title">Academia <span>Portal do aluno</span></h1>
                <MenuLink variant={'header'}>
                    { children }
                </MenuLink>
            </div>
        </div>
    )
}