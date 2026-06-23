import { NavLink } from "react-router-dom";
import styles from "./menu.module.css";

function MenuRoot({children}) {
    return (
        <div className={styles.menu}>
            {children}
        </div>
    )
}

function MenuBody({ children }) {
    return (
        <div className={styles.menu__body}>
            { children }
        </div>
    )
}

function MenuNav({ children, variant }) {

    const baseClass = styles.menu__nav;
    const variantClass = variant ? styles[`menu__nav--${variant}`] : "";

    return (
        <nav className={`${baseClass} ${variantClass}`.trim()}>
            {children}
        </nav>
    )
}

function MenuItem({ children, to }) {
    return (
        <NavLink 
            to={to}
            className={({ isActive }) => {
                const baseClass = styles.menu__item;
                const activeClass = isActive ? styles["menu__item--active"] : "";
                
                return `${baseClass} ${activeClass}`.trim();
            }}
        >
            {children}
        </NavLink>
    )
}

function MenuTitle({ children }) {
    return (
        <h1 className={styles.menu__title} >
            { children }
        </h1>
    )
}

const Menu = Object.assign(MenuRoot, {
    Body: MenuBody,
    Title: MenuTitle,
    Item: MenuItem,
    Nav: MenuNav
});

export { Menu };