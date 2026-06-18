import { NavLink } from "react-router-dom";
import "../../styles/menu.css"

export default function MenuItem({ children, to }) {
    return (
        <NavLink 
            to={to}
            className={({ isActive }) => 
                `menu__item ${isActive ? "menu__item--active" : ""}`
            }
        >
            {children}
        </NavLink>
    )
}