import { NavLink } from "react-router-dom";


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