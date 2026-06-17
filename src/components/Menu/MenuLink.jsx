

export default function MenuLink({ children, variant }) {
    return (
        <nav className={`menu__links menu__links--${variant}`}>
            {children}
        </nav>
    )
}