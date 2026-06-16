

export default function Menu({ children }) {
    return (
        <div className="menu">
            <div className="menu__body">
                <h1 className="menu__title">Academia <span>Portal do aluno</span></h1>
                <nav className="menu__links">
                    { children }
                </nav>
            </div>
        </div>
    )
}